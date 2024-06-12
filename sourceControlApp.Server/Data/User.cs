using System.ComponentModel.DataAnnotations;
using static sourceControlApp.Server.Data.Constants;

namespace sourceControlApp.Server.Data
{
    public class User
    {

        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(UserNameLenghtMax)]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        [MaxLength(UserNameLenghtMax)]
        public string LastName { get; set; } = string.Empty;

        [Required]
        [MaxLength(EmailLenghtMax)]
        public string Email { get; set; } = string.Empty;

        [Required]
        [MaxLength(PasswordLenghtMaxDb)]
        public string Password { get; set; } = string.Empty;

    }
}
