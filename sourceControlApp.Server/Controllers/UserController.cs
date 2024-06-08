using Microsoft.AspNetCore.Mvc;
using sourceControlApp.Server.Data;

namespace sourceControlApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {

        private readonly ILogger<UserController> _logger;
        private readonly SourceControlDbContext data;

        public UserController(ILogger<UserController> logger, SourceControlDbContext dbContext)
        {
            _logger = logger;
            data = dbContext;
        }

        [Route("register")]
        [HttpGet]
        public IActionResult Register()
        {

            return Ok(data.Users.ToList());
        }
    }
}
