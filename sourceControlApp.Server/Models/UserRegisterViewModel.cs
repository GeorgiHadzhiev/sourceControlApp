using System.ComponentModel.DataAnnotations;
using static sourceControlApp.Server.Data.Constants;

namespace sourceControlApp.Server.Models
{
    public class UserRegisterViewModel
    {

        [Required]
        [StringLength(UserNameLenghtMax,MinimumLength = UserNameLenghtMin)]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        [StringLength(UserNameLenghtMax, MinimumLength = UserNameLenghtMin)]
        public string LastName { get; set; } = string.Empty;

        [Required]
        [StringLength(EmailLenghtMax, MinimumLength = EmailLenghtMin)]
        public string Email { get; set; } = string.Empty;

        [Required]
        [StringLength(PasswordLenghtMax, MinimumLength = PasswordLenghtMin)]
        public string Password { get; set; } = string.Empty;

    }
}
