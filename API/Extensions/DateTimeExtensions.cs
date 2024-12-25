using System;
using System.Reflection.Metadata.Ecma335;

namespace API.Extensions;

public static class DateTimeExtensions
{
    public static int AgeCalculator(this DateOnly dob )
    {
        var today = DateOnly.FromDateTime(DateTime.Now);
         
        var age = today.Year - dob.Year; 

        if(dob > today.AddYears(-age)) age--;
    
        return age;
    }
}
