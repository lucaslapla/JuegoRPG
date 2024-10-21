"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.persDragBallZ = void 0;
var Atributos_1 = require("./Atributos");
var persDragBallZ = /** @class */ (function (_super) {
    __extends(persDragBallZ, _super);
    function persDragBallZ(dirImagen, nombre, golpeBasico, armadura, superSaiyajin) {
        var _this = _super.call(this, dirImagen, nombre, golpeBasico, armadura) || this;
        _this.superSaiyajin = superSaiyajin;
        return _this;
    }
    persDragBallZ.prototype.getSuperSaiyajin = function () {
        return this.superSaiyajin;
    };
    persDragBallZ.prototype.setEvoluciona = function (personaje1) {
        var evolucion = true;
        this.superSaiyajin = evolucion;
        this.setSuperSaiyajin(evolucion, personaje1);
    };
    persDragBallZ.prototype.setSuperSaiyajin = function (superSaiyajin, personaje1) {
        this.superSaiyajin = superSaiyajin;
        if (superSaiyajin) {
            this.modificarGolpeBasico(personaje1);
            this.modificarArmadura(personaje1);
        }
    };
    persDragBallZ.prototype.modificarGolpeBasico = function (personaje1) {
        var aux = personaje1.getgolpeBasico();
        aux = Math.round(aux * (1.15)); // aumenta el golpeBasico 15%
        console.log("Aumenta Golpe Basico un 10 % ", aux);
        personaje1.setgolpeBasico(aux);
    };
    persDragBallZ.prototype.modificarArmadura = function (personaje1) {
        var aux = personaje1.getarmadura();
        aux = Math.round(aux * (1.15)); // aumenta la armadura 15%
        console.log("Aumenta resistencia Armadura 10 % ", aux);
        this.setarmadura(aux);
    };
    return persDragBallZ;
}(Atributos_1.Atributos));
exports.persDragBallZ = persDragBallZ;
