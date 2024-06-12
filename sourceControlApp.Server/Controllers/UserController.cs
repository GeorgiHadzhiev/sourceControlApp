using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
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

            try
            {

                var dbUser = await data.Users
                    .Where(u => u.Email == model.Email)
                    .FirstOrDefaultAsync();

                if (dbUser != null) 
                {

                    return BadRequest("An account with this e-mail already exists!");

                } 

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
            catch (Exception ex)
            { 
                
                return BadRequest(ex.Message);
            
            }

        }

        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] User user)
        {
            try
            {
                var dbUser = await data.Users
                    .Where(u => u.Email == user.Email)
                    .FirstOrDefaultAsync();

                if (dbUser == null)
                {

                    return BadRequest(WrongEmailOrPass);

                }

                passwordCheker(user.Password, dbUser?.Password);

                string resJson = JsonConvert.SerializeObject(dbUser,Formatting.Indented);
                return Ok(resJson);

            }
            catch (Exception ex) 
            {

                return BadRequest(ex.Message);

            }

        }


        private static void passwordCheker(string password, string? hashedPassword)
        {
            bool passwordValidation = BC
                            .EnhancedVerify(password, hashedPassword);

            if (passwordValidation == false)
            {

                throw new Exception(WrongEmailOrPass);

            }
        }


    }
}

