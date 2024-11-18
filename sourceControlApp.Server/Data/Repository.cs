using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static sourceControlApp.Server.Data.Constants;

namespace sourceControlApp.Server.Data
{
    public class Repository
    {

        [Key]
        public Guid Id { get; set; }

        [Required]
        //temporary number set here. Will remove once changed to upload file instead of string
        [MaxLength(800)]
        public string Code { get; set; } = string.Empty;

        [Required]
        [MaxLength(RepoNameMax)]
        public string RepoName { get; set; } = string.Empty;

        [MaxLength(RepoDescriptionMax)]
        public string Description { get; set; } = string.Empty;

        [Required]
        [MaxLength(RepoVisibilityMax)]
        public string Visibility { get; set; } = string.Empty;

        public IList<string> Contributors = new List<string>();

        [Required]
        public Guid UserId { get; set; }

        [Required]
        [ForeignKey(nameof(UserId))]
        public User User { get; set; } = null!;


    }
}
