namespace sourceControlApp.Server.Data.DTOs
{
    public class recentRepoDTO
    {

        public string RepoName { get; set; } = string.Empty;
        public bool Visibility { get; set; }
        public string Description { get; set; } = string.Empty;

    }
}
