"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personajes = void 0;
var Personajes = /** @class */ (function () {
    function Personajes(personajes) {
        this.personajes = personajes;
    }
    Personajes.prototype.getpersonajes = function () {
        return this.personajes;
    };
    Personajes.prototype.setpersonajes = function (personajes) {
        this.personajes = personajes;
    };
    // Método para obtener todas de los personajes
    Personajes.prototype.armaduras = function () {
        return this.personajes.map(function (personaje) { return personaje.getarmadura(); });
    };
    Personajes.prototype.golpeBasico = function () {
        return this.personajes.map(function (personaje) { return personaje.getgolpeBasico(); });
    };
    Personajes.prototype.ataqueModicaArmadura = function (personaje1, personaje2) {
        var restaArmadura = personaje2.getarmadura() - personaje1.getgolpeBasico();
        personaje2.setarmadura(restaArmadura);
    };
    // Método para listar los nombres de los personajes
    Personajes.prototype.listarPersonajes = function () {
        return this.personajes.map(function (personaje) { return personaje.getnombre(); });
    };
    Personajes.prototype.listarArmadura = function () {
        return this.personajes.map(function (personaje) { return personaje.getarmadura(); });
    };
    Personajes.prototype.listargolpeBasico = function () {
        return this.personajes.map(function (personaje) { return personaje.getgolpeBasico(); });
    };
    return Personajes;
}());
exports.Personajes = Personajes;
