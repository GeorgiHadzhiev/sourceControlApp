using Microsoft.AspNetCore.Mvc;

namespace sourceControlApp.Server.Controllers
{
    [ApiController]
    [Route("/register")]
    public class UserController : ControllerBase
    {

        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpPost(Name = "Register")]
        public IActionResult Post()
        {

            return Ok("This endpoint works");

        }
    }
}
