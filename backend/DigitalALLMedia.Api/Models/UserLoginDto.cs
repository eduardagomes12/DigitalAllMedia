using System.ComponentModel.DataAnnotations;

namespace DigitalALLMedia.Api.Models
{
    public class UserLoginDto
    {
        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
