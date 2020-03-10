const passport = require ("passport");
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const key = require("./key")


passport.use(
   new googleStrategy(
       {clientID: key.google.clientID ,
       clientSecret: key.google.clientSecret, 
       callbackURL: "/auth/google/redirect"
   },
       () => {
//notung now
       }
 ))
