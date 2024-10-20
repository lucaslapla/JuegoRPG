"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personajes = void 0;
var persDragBallZ_1 = require("./persDragBallZ");
var persMarvel_1 = require("./persMarvel");
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
    Personajes.prototype.ataqueModicaArmadura = function (personaje1, personaje2, round) {
        if (personaje1 instanceof persDragBallZ_1.persDragBallZ && round == 3) { // se compara cada personaje, iterando en el main
            console.log(personaje1.getnombre() + " se transfora en super Saiyajin ");
            personaje1.setSuperSaiyajin(true, personaje1);
        }
        if (personaje1 instanceof persMarvel_1.persMarvel && round == 4) {
            var restaArmaduraPoder = personaje2.getarmadura() - personaje1.getpoder();
            if (personaje1.getnombre() == "IronMan") { // Ataque especial 
                console.log(" IronMan Ataca con Rayo Uni con un daño de " + personaje1.getpoder() + " restando " + restaArmaduraPoder + " Armadura");
                personaje2.setarmadura(restaArmaduraPoder);
            }
            else if (personaje1.getnombre() == "Hulk") {
                console.log(" Hulk Ataca con Furia con un daño de " + personaje1.getpoder() + " restando " + restaArmaduraPoder + " Armadura");
                personaje2.setarmadura(restaArmaduraPoder);
            }
            else {
                console.log(" Thor Ataca con Golpe de Trueno con un daño de " + personaje1.getpoder() + " restando " + restaArmaduraPoder + " Armadura");
                personaje2.setarmadura(restaArmaduraPoder);
            }
        }
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
