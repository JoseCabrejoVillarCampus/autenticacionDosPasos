var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';
export class nombreDTO {
    constructor(id_nombre, nombre, apellido, id) {
        this.ID = id_nombre;
        this.nombre = nombre;
        this.apellido = apellido;
        this.ID2 = id;
    }
}
__decorate([
    Expose({ name: 'id_nombre' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || value == undefined)
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id_documento incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], nombreDTO.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'nombre' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro tipo_documento es obligatorio` }}})
    @MaxLength(30, {message: ()=>{throw {status: 401, message: `El parametro tipo_documento no puede pasar os 30 caracteres`}}}) */
    ,
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato tipo_categoria incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], nombreDTO.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'apellido' })
    /* @IsDefined({message: ()=>{throw {status: 401, message: `El parametro tipo_documento es obligatorio` }}})
    @MaxLength(30, {message: ()=>{throw {status: 401, message: `El parametro tipo_documento no puede pasar os 30 caracteres`}}}) */
    ,
    Transform(({ value }) => { if (/^[a-z A-Z áéíóúÁÉÍÓÚñÑüÜ 0-9]+$/.test(value))
        return value;
    else
        throw { status: 400, message: `El dato tipo_categoria incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], nombreDTO.prototype, "apellido", void 0);
__decorate([
    Expose({ name: 'id' }),
    IsNumber(),
    Transform(({ value }) => { if (/^[0-9]+$/.test(value) || typeof value == "undefined")
        return Math.floor(value);
    else
        throw { status: 400, message: `El dato id incumple los parametros acordados` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], nombreDTO.prototype, "ID2", void 0);
