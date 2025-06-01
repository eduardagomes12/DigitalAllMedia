using System.ComponentModel.DataAnnotations;

namespace DigitalALLMedia.Api.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }  // <-- Nome adicionado

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
