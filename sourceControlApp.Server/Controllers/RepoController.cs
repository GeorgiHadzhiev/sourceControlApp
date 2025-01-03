﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sourceControlApp.Server.Data;
using sourceControlApp.Server.Models;

namespace sourceControlApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RepoController : ControllerBase
    {

        private readonly ILogger<RepoController> logger;
        private readonly SourceControlDbContext data;


        public RepoController(ILogger<RepoController> _logger, SourceControlDbContext dbContext)
        {
            logger = _logger;
            data = dbContext;
        }

        [Route("Create")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] RepoCreateModel model)
        {

            try
            {

                Repository repo = new Repository()
                {

                    Code = model.Code,
                    RepoName = model.RepoName,
                    Description = model.Description,
                    Visibility = model.Visibility,
                    UserId = model.UserId,

                };

                if (model.Contributors.Count > 0)
                {
                    await AddContributors(model, repo);
                }

                await data.Repositories.AddAsync(repo);
                await data.SaveChangesAsync();

                return Ok();

            }
            catch(Exception ex)
            { 

                return BadRequest(ex.Message);

            }
            
        }

        private async Task AddContributors(RepoCreateModel model, Repository repo)
        {
            foreach (var contributorEmail in model.Contributors)
            {

                var contributor = await data.Users
                .Where(u => u.Email == contributorEmail)
                .Select(c => new
                {

                    c.Id

                })
                .AsNoTracking()
                .FirstOrDefaultAsync() ?? throw new Exception();


                repo.RepositoryContributors.Add(new RepositoryContributors()
                {

                    UserId = contributor.Id,
                    RepositoryId = repo.Id,

                });

            }
        }
    }
}
