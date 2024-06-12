namespace sourceControlApp.Server.Data
{
    public class Constants
    {
        #region "First Name and Last Name"

        public const int UserNameLenghtMax = 30;
        public const int UserNameLenghtMin = 2;

        #endregion

        #region "Email
        public const int EmailLenghtMax = 50;
        public const int EmailLenghtMin = 5;
        #endregion

        #region "Password"
        public const int PasswordLenghtMax = 30;
        public const int PasswordLenghtMin = 8;
        #endregion


        /// <summary>
        /// This is how many iterations will be performed
        /// when calculating the hash
        /// </summary>
        #region "Salt for hash"
        public const int SaltRounds = 13;
        #endregion

    }
}
