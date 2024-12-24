using System;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController(DataContext context) : BaseApiController
{
    [Authorize]
    [HttpGet("auth")]
    public ActionResult<string> GetAuth()
    {
        return "Secret";
    }

    [HttpGet("not-found")]
    public ActionResult<AppUser> GetNotFound()
    {
        var things = context.Users.Find(-1);

        if(things==null) return NotFound(); 

        return things;
    }

    [HttpGet("server-error")]
    public ActionResult<AppUser> GetserverError()
    {
        var things = context.Users.Find(-1)?? throw new Exception("server down");

        return things;
    }

    [HttpGet("bad-request")]
    public ActionResult<string> GetBadRequest()
    {
        return BadRequest("Not good request");    
    }

}
