﻿using System.IdentityModel.Tokens.Jwt;

namespace sourceControlApp.Server.Data
{
    public class UserPayload
    {

        public Guid Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string AccessToken { get; set; } = string.Empty;

    }
}
