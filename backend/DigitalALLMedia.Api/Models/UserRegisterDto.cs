using System.ComponentModel.DataAnnotations;

namespace DigitalALLMedia.Api.Models
{
    public class UserRegisterDto
    {
        [Required]
        public string Nome { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public string? ProfileImageUrl { get; set; } 
    }
}
