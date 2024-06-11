using Microsoft.EntityFrameworkCore;

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
