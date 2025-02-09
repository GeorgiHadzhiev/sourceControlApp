namespace sourceControlApp.Server.Data.DTOs
{
    public class RecentRepoDTO
    {

        public string RepoName { get; set; } = string.Empty;
        public bool Visibility { get; set; }
        public string Description { get; set; } = string.Empty;

    }
}
