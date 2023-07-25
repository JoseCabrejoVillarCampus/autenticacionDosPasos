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

router.get('/discord', passportHelper.authenticate('discord', { scope: ['email'] }))
router.get('/discord/callback', passportHelper.authenticate('discord', { failureRedirect: '/login', successRedirect: '/dashboard'}))

router.get('/facebook', passportHelper.authenticate('facebook', { scope: ['email'] }))
router.get('/facebook/callback', passportHelper.authenticate('facebook', { failureRedirect: '/login', successRedirect: '/dashboard'}))


export default router;