import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import passportHelper from './helper/passporthelper.js';
import authRouter from './routers/authRouters.js';
import checkAuthentication from './helper/authenticacion.js'
import storageNombre from './routers/nombre.js';

dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use(session({
    secret: 'secreto', // Esta clave secreta debería estar en un archivo de configuración
    resave: false, // No vuelve a guardar si no hay cambios
    saveUninitialized: false // No guarda una sesión si no hay datos
}))
appExpress.use(passportHelper.initialize()); // Inicializa passport
appExpress.use(passportHelper.session()); // Permite que passport use "express-session" para almacenar la sesión del usuario

appExpress.use(express.static('public'))
appExpress.use("/nombre", storageNombre);

appExpress.get('/', (req, res) => res.redirect('/login'));
appExpress.use('/login', authRouter);
appExpress.get('/dashboard', checkAuthentication,  (req, res) => {res.sendFile('dashboard.html', { root: './public' })});


const config =JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`));