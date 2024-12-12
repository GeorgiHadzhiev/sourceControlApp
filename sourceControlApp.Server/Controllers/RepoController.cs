using Microsoft.AspNetCore.Mvc;
using sourceControlApp.Server.Models;

namespace sourceControlApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RepoController : ControllerBase
    {

        private readonly ILogger<RepoController> logger;


        public RepoController(ILogger<RepoController> _logger)
        {
            logger = _logger;
        }

        [Route("create")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] RepoCreateModel model)
        {

            return Ok("Hey, this works!");

        }

    }
}
