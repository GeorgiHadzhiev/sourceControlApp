using Microsoft.AspNetCore.Mvc;
using sourceControlApp.Server.Data;
using sourceControlApp.Server.Models;
using static sourceControlApp.Server.Data.Constants;

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
            string hashedPassword = BC
                .EnhancedHashPassword(model.Password, SaltRounds);

            var user = new User()
            {

                Id = Guid.NewGuid(),
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                Password = hashedPassword,

            };

            await data.Users.AddAsync(user);
            await data.SaveChangesAsync();
            //passwordCheker(model.Password, hashedPassword);

            return Ok("");

        }


        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] User user)
        {

            var dbUser = data.Users
                .Where(u => u.Email == user.Email)
                .FirstOrDefault();

            if (dbUser == null)
            {

                return BadRequest("Username or Password is Incorrect!");

            }

            passwordCheker(user.Password, dbUser?.Password);

            return Ok("");

        }


        private static void passwordCheker(string password, string? hashedPassword)
        {
            bool passwordValidation = BC
                            .EnhancedVerify(password, hashedPassword);

            if (passwordValidation == false)
            {

                throw new Exception("Invalid Username or Password!");

            }
        }


    }
}

