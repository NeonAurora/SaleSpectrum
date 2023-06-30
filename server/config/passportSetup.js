import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: `${process.env.CLIENT_URL}/dummy`,
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callback) {
      // For now, we are just returning the profile information without any database checks
      callback(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
