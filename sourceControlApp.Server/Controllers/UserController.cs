using Microsoft.AspNetCore.Mvc;
using sourceControlApp.Server.Data;
using sourceControlApp.Server.Models;

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
        public async Task<IActionResult> Register(UserRegisterModel model)
        {
            var user = new User()
            {

                Id = Guid.NewGuid(),
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                Password = model.Password,

            };

            await data.Users.AddAsync(user);
            await data.SaveChangesAsync();

            return Ok();

        }
    }
}

