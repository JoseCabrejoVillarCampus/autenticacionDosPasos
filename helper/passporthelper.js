import passport from "passport";
import {
    Strategy as DiscordStrategy
} from "passport-discord";

const authUser = (accessToken, refreshToken, profile, done) => {
    // Tu lógica de autenticación aquí
    // Puedes usar los parámetros (accessToken, refreshToken, profile) para autenticar al usuario y obtener información relevante
    done(null, profile); // El callback debe llamar a `done` para finalizar la autenticación
};

passport.use(
    new DiscordStrategy({
            clientID: '1133824432830435448',
            clientSecret: '45713009cd8f0ebce1634e0a40bbe660ccd8566cce8ee43b34b8612efb7cee1e',
            callbackURL: 'https://discord.com/api/oauth2/authorize?client_id=1133824432830435448&redirect_uri=https%3A%2F%2F127.10.16.25%3A5033%2Fnombre&response_type=code&scope=identify%20email%20connections%20guilds%20guilds.join%20gdm.join',
            scope: ['identify', 'email', 'connections', 'guilds', 'guilds.join', 'gdm.join']
        }, 
        authUser
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