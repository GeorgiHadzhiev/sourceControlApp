using Microsoft.AspNetCore.Mvc;

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

        public async Task<IActionResult> Create()
        {



        }

    }
}
