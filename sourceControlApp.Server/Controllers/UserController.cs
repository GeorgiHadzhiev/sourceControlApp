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

        [HttpGet(Name = "Register")]
        public IEnumerable<UserController> Get()
        {

            return null;
            
        }
    }
}
