using System.ComponentModel.DataAnnotations;

namespace sourceControlApp.Server.Models
{
    public class User
    {

        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(30)]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        [MaxLength(30)]
        public string LastName { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string Email { get; set; } = string.Empty;

        [Required]
        [MaxLength(30)]
        public string Password { get; set; } = string.Empty;

    }
}
