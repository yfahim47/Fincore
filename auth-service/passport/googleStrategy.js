const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/Users');

passport.use(
    new GoogleStrategy(
        {
            clientID : process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/api/auth/google/callback"
        },

        async (accessToken, refreshToken, profile, done) => {
            try{
                let user = await User.findOne({where: {googleId : profile.id}});

                if(!user){
                    user = await User.create({
                        googleId: profile.id,
                        username: profile.displayName,
                        email: profile.emails[0].value,
                    });
                }
                return done(null, user);
            }catch(err){
                return done(err, null);
            }
        }
    )
)

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser(async (id, done)=> {
    const user = User.findByPk(id);
    done(null, user);
})