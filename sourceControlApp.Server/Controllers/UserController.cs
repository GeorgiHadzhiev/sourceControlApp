using Microsoft.AspNetCore.Mvc;
using sourceControlApp.Server.Data;

namespace sourceControlApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {

        private readonly ILogger<UserController> logger;
        private readonly SourceControlDbContext data;

        public UserController(ILogger<UserController> _logger, SourceControlDbContext dbContext)
        {
            logger = _logger;
            data = dbContext;
        }

        [Route("register")]
        [HttpPost]
        public IActionResult Register()
        {

            return Ok();

        }
    }
}

