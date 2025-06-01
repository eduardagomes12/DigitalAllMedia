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
            if (string.IsNullOrWhiteSpace(dto.Nome) ||
                string.IsNullOrWhiteSpace(dto.Email) ||
                string.IsNullOrWhiteSpace(dto.Password))
            {
                return BadRequest(new { message = "All fields are required." });
            }

            var exists = await _context.Users.AnyAsync(u => u.Email == dto.Email);
            if (exists)
            {
                return BadRequest(new { message = "Email already in use." });
            }

            var user = new User
            {
                Nome = dto.Nome,
                Email = dto.Email,
                Password = dto.Password,
                ProfileImageUrl = dto.ProfileImageUrl
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

            return Ok(new
            {
                id = user.Id,
                nome = user.Nome,
                email = user.Email,
                profileImageUrl = user.ProfileImageUrl,
                message = "Login successful!"
            });
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _context.Users
                .Select(u => new
                {
                    u.Id,
                    u.Nome,
                    u.Email,
                    u.CreatedAt
                })
                .ToListAsync();

            return Ok(users);
        }

    }
}
