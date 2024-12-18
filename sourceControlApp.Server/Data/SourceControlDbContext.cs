using Microsoft.EntityFrameworkCore;

namespace sourceControlApp.Server.Data
{
    public class SourceControlDbContext: DbContext
    {

        public SourceControlDbContext(DbContextOptions options) 
            :base(options) 
        {  
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<RepositoryContributors>()
                .HasKey(rc => new { rc.RepositoryId, rc.UserId });

            builder.Entity<RepositoryContributors>()
                .HasOne(r => r.Repository)
                .WithMany(rc => rc.RepositoryContributors)
                .OnDelete(DeleteBehavior.NoAction);
        }

        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Repository> Repositories { get; set; } = null!;

    }
}
