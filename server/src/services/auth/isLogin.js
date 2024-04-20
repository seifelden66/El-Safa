const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "kareem",
};
passport.use(
  new JwtStrategy(opts, function (user, done) {
    done(null, user);
  })
);

const passportInitialize = passport.initialize();
const passportAuthenticate = passport.authenticate("jwt", {
  failureRedirect: "/failure",
  session: false,
});
module.exports = { passportInitialize, passportAuthenticate };
