using System.ComponentModel.DataAnnotations;
using static sourceControlApp.Server.Data.Constants;

namespace sourceControlApp.Server.Models
{
    public class UserRegisterViewModel
    {

        [Required]
        [MaxLength(UserNameLenght)]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        [MaxLength(UserNameLenght)]
        public string LastName { get; set; } = string.Empty;

        [Required]
        [MaxLength(EmailLenght)]
        public string Email { get; set; } = string.Empty;

        [Required]
        [MaxLength(PasswordLenght)]
        public string Password { get; set; } = string.Empty;

    }
}
