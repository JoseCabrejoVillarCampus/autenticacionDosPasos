# Autenticación Dos Pasos con Oauth2

 Oauth 2.0, nos permite obtener datos de un usuario de un servicio en lines como facebook o discord, sin la necsidad de inicio de sesion del usuario atravez de una intereaccion de la aplicacion, el usuario y el proveedor de servicios

# PASSPORT

Passport es un middleware de autenticación para Node.js. Extremadamente flexible y modular, Passport se puede colocar discretamente en cualquier aplicación web basada en Express. Un conjunto integral de estrategias admite la autenticación mediante un nombre de usuario y contraseña, Facebook, Twitter y más.

# INSTALACION DEPENDENCIAS

1. Inicializar el archivo package.json en la consola:

```
npm init -y
```

2. Instalar dependencias (para desarrollo):

```
npm i -E -D nodemon express dotenv mysql2 class-transformer reflect-metadata typescript nanoid passport
```



## NOTA: sesssion y passport trabajan de la mano



## express-session

resave: false = no guarda si no hay cambios

saveUninitialized: false = Permite que passport use "express-session" para almacenar la secion

### Instalar Dependencias para autenticar por servicio

1. Instalar Dependencia para verificar por facebook:

```
npm i -E -D passport-facebook
```

1. Instalar Dependencias para verificar por discord:

```
npm i -E -D passport-discord
```

Al momento de importar en el archivo es importante renombrar el metodo Strategy:

  ``````javascript
  import passport from "passport";
  import { Strategy as FacebookStrategy } from "passport-facebook";
  ``````

Ejemplo Implementación passport-facebook:

``````
passport.use(
	new FacebookStrategy(
	{
		clienteID: "230120676102215",
		clientSecret: '6e9bd1a20713f982987b471e7c5668e2',
		callbackURL: "http://localhost:3001/login/facebook/callback",
	},
	authUser
	)
)
``````



## OTRAS ESTRATEGIAS DE VALIDACION

Otras validaciones como discord, twitter, entre otras se pueden consultar en el sigueinte link:

https://www.passportjs.org/packages/