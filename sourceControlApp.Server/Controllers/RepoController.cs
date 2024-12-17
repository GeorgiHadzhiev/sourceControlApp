using Microsoft.AspNetCore.Mvc;
using sourceControlApp.Server.Data;
using sourceControlApp.Server.Models;

namespace sourceControlApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RepoController : ControllerBase
    {

        private readonly ILogger<RepoController> logger;
        private readonly SourceControlDbContext data;


        public RepoController(ILogger<RepoController> _logger, SourceControlDbContext dbContext)
        {
            logger = _logger;
            data = dbContext;
        }

        [Route("Create")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] RepoCreateModel model)
        {

            Repository repo = new Repository()
            {

                Code = model.Code,
                RepoName = model.RepoName,
                Description = model.Description,
                Visibility = model.Visibility,
                Contributors = model.Contributors,
                UserId = model.UserId,

            };

            await data.Repositories.AddAsync(repo);
            await data.SaveChangesAsync();

            return Ok();


        }

    }
}
