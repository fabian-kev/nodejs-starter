import passport from 'passport'

passport.serializeUser(function(user, done) {
    done(null, user);
 });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});


// passport.use(new GoogleStrategy({
//     clientID: '996583543657-l9tca4q0dodg016jnt0dos7q6lkaq4n9.apps.googleusercontent.com',
//     clientSecret: 'dOqdQI0L0gcTg5NTAd6iEF_j',
//     callbackURL: "http://localhost:3000/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     //   console.log(accessToken)
//     //   console.log(refreshToken)
//       console.log(profile)
//       cb(null, profile)
//     // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     //   return cb(err, user);
//     // });
//   }
// ));

