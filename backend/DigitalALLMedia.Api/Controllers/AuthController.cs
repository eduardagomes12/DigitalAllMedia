using DigitalALLMedia.Api.Data;
using DigitalALLMedia.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DigitalALLMedia.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserRegisterDto dto)
        {
            var exists = await _context.Users.AnyAsync(u => u.Email == dto.Email);
            if (exists)
            {
                return BadRequest(new { message = "Email already in use." });
            }

            var user = new User
            {
                Email = dto.Email,
                Password = dto.Password // mais tarde podemos usar BCrypt aqui
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Created("", new { id = user.Id, message = "User registered successfully!" });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginDto dto)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == dto.Email);

            if (user == null)
            {
                return NotFound(new { message = "User not found." });
            }

            if (user.Password != dto.Password)
            {
                return Unauthorized(new { message = "Invalid password." });
            }

            return Ok(new { id = user.Id, email = user.Email, message = "Login successful!" });
        }


    }
}
