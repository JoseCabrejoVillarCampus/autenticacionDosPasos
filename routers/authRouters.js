import { Router } from "express";
import passportHelper from "../helper/passporthelper.js";

const router = Router();

router.get('/', (req, res) => {
    res.sendFile('login.html', { root: './public' })
})
router.get('/logout', (req, res) => {
    req.logout({}, err => console.log(err));
    res.redirect('/login');
})

router.get('/discord', passportHelper.authenticate('discord', { scope: ['identify', 'email', 'connections', 'guilds', 'guilds.join', 'gdm.join']
}))
router.get('/discord/callback', passportHelper.authenticate('discord', { failureRedirect: '/login', successRedirect: '/dashboard'}))


export default router;