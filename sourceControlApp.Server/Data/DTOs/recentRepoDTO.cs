namespace sourceControlApp.Server.Data.DTOs
{
    public class RecentRepoDTO
    {

        public Guid Id { get; set; } 
        public string RepoName { get; set; } = string.Empty;
        public string Visibility { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;

    }
}
