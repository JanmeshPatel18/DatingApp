using System;

namespace API.DTOs;

public class MembersDto
{
    public int Id { get; set; }
    public string?  UserName { get; set; }  
    public int Age { get; set; }   
    public string? Url { get; set; }
    public string? KnownAs { get; set; }
    public DateTime DateCreated { get; set; }
    public required DateTime LastActive { get; set; }
    public string? Gender { get; set; }
    public string? Introduction { get; set; }
    public string? Interests { get; set; }
    public string? LookingFor { get; set; }
    public string? City { get; set; }
    public string? Country { get; set; }
    public List<PhotoDto>? Photos { get; set; }
}

