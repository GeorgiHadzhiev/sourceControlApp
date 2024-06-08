using Microsoft.EntityFrameworkCore;
using sourceControlApp.Server.Models;

namespace sourceControlApp.Server.Data
{
    public class SourceControlDbContext: DbContext
    {

        public SourceControlDbContext(DbContextOptions options) 
            :base(options) 
        {  
        }

        public DbSet<User> Users { get; set; }

    }
}
