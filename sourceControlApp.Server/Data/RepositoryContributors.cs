using System.ComponentModel.DataAnnotations.Schema;

namespace sourceControlApp.Server.Data
{
    public class RepositoryContributors
    {

        public Guid UserId { get; set; }

        [ForeignKey(nameof(UserId))]
        public User User { get; set; } = null!;

        public Guid RepositoryId { get; set; }

        [ForeignKey(nameof(RepositoryId))]
        public Repository Repository { get; set; } = null!;

    }
}
