using System;
using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class AccountController(DataContext context,ITokenService tokenService, IMapper mapper) : BaseApiController
{
    [HttpPost("register")]

    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {

        if (await UserExists(registerDto.Username)) return BadRequest("User Already exists");

        using var hmac = new HMACSHA512();

        var user = mapper.Map<AppUser>(registerDto);
        
        user.UserName = registerDto.Username.ToLower();
        user.HashPassword = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password));
        user.HashSalt = hmac.Key;

        context.Users.Add(user);
        await context.SaveChangesAsync();

        return new UserDto {
            Username = user.UserName,
            Token = tokenService.CreateToken(user),
            KnownAs = user.KnownAs
        };
    }


    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto){

       var user = await context.Users.Include(x=>x.Photos ).FirstOrDefaultAsync(x => x.UserName == loginDto.Username.ToLower());     

       if(user==null) return Unauthorized("Invalid Username");

       using var hmac = new HMACSHA512(user.HashSalt);

       var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

       for (int i = 0; i < computedHash.Length; i++)
       {
            if(computedHash[i] != user.HashPassword[i]) return Unauthorized("Invalid Password");
       }
       
        return new UserDto {
            Username = user.UserName,
            KnownAs = user.KnownAs,
            Token = tokenService.CreateToken(user),
            PhotoUrl = user.Photos.FirstOrDefault(x => x.IsMain)?.Url
        };

    }
    
    private async Task<bool> UserExists(string username){
        return await context.Users.AnyAsync(x=> x.UserName.ToLower() == username.ToLower());
    }   
}

