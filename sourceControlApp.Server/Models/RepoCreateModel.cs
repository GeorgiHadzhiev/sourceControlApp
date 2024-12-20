﻿using System.ComponentModel.DataAnnotations;
using static sourceControlApp.Server.Data.Constants;

namespace sourceControlApp.Server.Models
{
    public class RepoCreateModel
    {

        [Required]
        [StringLength(800, 
            MinimumLength = 1,
            ErrorMessage = "Repo Can't be empty!")]
        public string Code { get; set; } = string.Empty;

        [Required]
        [StringLength(RepoNameMax,
            MinimumLength = RepoNameMin,
            ErrorMessage = StringLenghtErrorMessage)]
        public string RepoName { get; set; } = string.Empty;

        [StringLength(RepoDescriptionMax,
            MinimumLength = RepoDescriptionMin,
            ErrorMessage = StringLenghtErrorMessage)]
        public string? Description { get; set; }

        [Required]
        [StringLength(RepoVisibilityMax,
            MinimumLength = RepoVisibilityMin,
            ErrorMessage = StringLenghtErrorMessage)]
        public string Visibility { get; set; } = string.Empty;

        public IList<string> Contributors { get; set; } = new List<string>();

        [Required]
        public Guid UserId { get; set; }

    }
}
