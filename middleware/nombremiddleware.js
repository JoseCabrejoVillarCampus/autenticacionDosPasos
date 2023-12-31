import express  from "express";
import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import {nombreDTO} from "../controller/nombre.js";
import { validate } from "class-validator";
import { jwtVerify } from "jose";

const proxyNombre = express();
proxyNombre.use(async(req,res,next)=>{
    try {
        const jwt = req.cookies.token;

        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            jwt,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        )
        let data = plainToClass(nombreDTO, jwtData.payload, { excludeExtraneousValues: true});
        await validate(data); 
        next();
    } catch (err) {
        const statusCode = err.status || 500;
        const errorMessage = err.message || 'Ha ocurrido un error en el servidor.';
        res.status(statusCode).send(errorMessage);
    }
})
export default proxyNombre;