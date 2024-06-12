using System.ComponentModel.DataAnnotations;
using static sourceControlApp.Server.Data.Constants;

namespace sourceControlApp.Server.Models
{
    public class UserRegisterModel
    {

        [Required]
        [StringLength(UserNameLenghtMax,
            MinimumLength = UserNameLenghtMin,
            ErrorMessage = StringLenghtErrorMessage)]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        [StringLength(UserNameLenghtMax, 
            MinimumLength = UserNameLenghtMin,
            ErrorMessage = StringLenghtErrorMessage)]
        public string LastName { get; set; } = string.Empty;

        [Required]
        [StringLength(EmailLenghtMax, 
            MinimumLength = EmailLenghtMin,
            ErrorMessage = StringLenghtErrorMessage)]
        public string Email { get; set; } = string.Empty;

        [Required]
        [StringLength(PasswordLenghtMax, 
            MinimumLength = PasswordLenghtMin,
            ErrorMessage = StringLenghtErrorMessage)]
        public string Password { get; set; } = string.Empty;

    }
}
