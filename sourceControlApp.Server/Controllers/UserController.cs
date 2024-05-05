using Microsoft.AspNetCore.Mvc;

namespace sourceControlApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {

        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [Route("register")]
        [HttpPost]
        public IActionResult Register()
        {
           
            return Ok("This user has registered");
        }
    }
}
