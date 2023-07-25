import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import {Strategy as DiscordStrategy} from "passport-discord";


const authUser = (accessToken, refreshToken, profile, done) => {
//    console.log("accessToken", accessToken); // AccesToken es el token que le permite a nuestra aplicación acceder a los datos del usuario
//    console.log("refreshToken", refreshToken); // RefreshToken es el token que le permite a nuestra aplicación obtener un nuevo accessToken cuando el actual expire
//    console.log("profile", profile); // Profile es el objeto que contiene los datos del usuario
    done(null, profile);
};

passport.use(
    new GoogleStrategy(
        {
            clientID:
                "1043140317076-o7hvp4prtmb3gogv4ju397fdvbhc5n0p.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3000/login/google/callback",
        },
        authUser
    )
);

passport.use(
    new DiscordStrategy(
        {
        clientID: 'id',
        clientSecret: 'secret',
        callbackURL: 'callbackURL',
        scope: scopes
        },
    )
);


passport.serializeUser((user, done) => {
    console.log("serializeUser");
    done(null, user);
});

passport.deserializeUser((user, done) => {
    console.log("deserializeUser");
    done(null, user);
});

export default passport;