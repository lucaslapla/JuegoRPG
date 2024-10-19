"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atributos = void 0;
var Atributos = /** @class */ (function () {
    function Atributos(dirImagen, nombre, golpeBasico, armadura) {
        this.dirImagen = dirImagen;
        this.nombre = nombre;
        this.golpeBasico = golpeBasico;
        this.armadura = armadura;
    }
    Atributos.prototype.getdirImagen = function () {
        return this.dirImagen;
    };
    Atributos.prototype.getnombre = function () {
        return this.nombre;
    };
    Atributos.prototype.getgolpeBasico = function () {
        return this.golpeBasico;
    };
    Atributos.prototype.getarmadura = function () {
        return this.armadura;
    };
    Atributos.prototype.setgolpeBasico = function (golpeBasico) {
        this.golpeBasico = golpeBasico;
    };
    Atributos.prototype.setarmadura = function (armadura) {
        this.armadura = armadura;
    };
    return Atributos;
}());
exports.Atributos = Atributos;
