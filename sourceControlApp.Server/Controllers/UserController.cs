using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using sourceControlApp.Server.Data;
using sourceControlApp.Server.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using static sourceControlApp.Server.Data.Constants;

namespace sourceControlApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {

        private readonly ILogger<UserController> logger;
        private readonly SourceControlDbContext data;
        private readonly IConfiguration config;

        public UserController(ILogger<UserController> _logger, SourceControlDbContext dbContext, IConfiguration _configuration)
        {
            logger = _logger;
            data = dbContext;
            config = _configuration;
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

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Email, dbUser.Email),
                    new Claim("userId", dbUser.Id.ToString()),
                };
                var token = getToken(authClaims);

                var payload = new UserPayload()
                {
                    Id = dbUser.Id,
                    FirstName = dbUser.FirstName,
                    LastName = dbUser.LastName,
                    Email = dbUser.Email,
                    AccessToken = new JwtSecurityTokenHandler().WriteToken(token),
                };

                string resJson = JsonConvert.SerializeObject(payload, Formatting.Indented);
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
        private JwtSecurityToken getToken(List<Claim> authClaim)
        {
            var authKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["JWT:Secret"]));

            var token = new JwtSecurityToken(
                issuer: config["JWT:ValidIssuer"],
                audience: config["JWT:ValidAudience"],
                claims: authClaim,
                signingCredentials: new SigningCredentials(authKey,SecurityAlgorithms.HmacSha256));

            return token;
        }

    }
}

