const User = require('./models/user');

const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const passportJWT = require('passport-jwt');

const JWTStrategy = passportJWT.Strategy;

const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },

      function(email, password, cb) {
        return User.findOne({ email: email, password: password })
          .then(user => {
            if (!user)
              return cb(null, false, { message: 'incorrect email or password' });
            return cb(null, user, { message: 'Logged in successfully.' });
          })
          .catch(err => {
            cb(err);
          });
      }
    )
  );


passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_KEY
      },
      function(jwtPayload, cb) {
        let data = {
          id: jwtPayload.id,
          name: jwtPayload.name,
          email: jwtPayload.email
        };
        cb(null, data);
      }
    )
  );