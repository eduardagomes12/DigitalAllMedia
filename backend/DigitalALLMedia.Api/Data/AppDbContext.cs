using DigitalALLMedia.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace DigitalALLMedia.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
