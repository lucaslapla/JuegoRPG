// Tercer entregable Juego
"use Strict";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rsl = require("readline-sync");
var Personajes_1 = require("./Personajes");
var persDragBallZ_1 = require("./persDragBallZ");
var persMarvel_1 = require("./persMarvel");
//Se cargan los Personajes (imagen , Nombrepersonaje, golpe Basico, Resist Armadura, evolucion o poderEspecial)
var goku = new persDragBallZ_1.persDragBallZ("./Goku", "Goku", 90, 540, false); // false superSaiyajin
var vegueta = new persDragBallZ_1.persDragBallZ("./Vegueta", "Vegueta", 85, 550, false);
var broly = new persDragBallZ_1.persDragBallZ("./Broly", "Broly", 100, 510, false);
var ironMan = new persMarvel_1.persMarvel("./Ironman", "IronMan", 75, 600, 80);
var hulk = new persMarvel_1.persMarvel("./Hulck", "Hulk", 95, 600, 100);
var thor = new persMarvel_1.persMarvel("./Thor", "Thor", 90, 500, 100);
var arrPersonajes = new Personajes_1.Personajes([goku, vegueta, broly, ironMan, hulk, thor]);
// Funcion para la lucha
function combate(peleador1, peleador2) {
    var sorteoinicio = Math.floor(Math.random() * (2 - 1 + 1)) + 1; // Generoun random para ver quien inicia
    var round = 1;
    if (sorteoinicio == 1) {
        console.log("inicia el combate: " + arrPersonajes.listarPersonajes()[peleador1]);
        while (arrPersonajes.listarArmadura()[peleador1] > arrPersonajes.listargolpeBasico()[peleador2] && arrPersonajes.listarArmadura()[peleador2] > arrPersonajes.listargolpeBasico()[peleador1]) {
            console.log(" ...Round " + round + " ... ");
            // ataca primero el Personaje1
            arrPersonajes.ataqueModicaArmadura(arrPersonajes.getpersonajes()[peleador1], arrPersonajes.getpersonajes()[peleador2], round);
            console.log(arrPersonajes.listarPersonajes()[peleador1] + " Da un Golape Basico de " + arrPersonajes.listargolpeBasico()[peleador1] + " Devilitando armadura de " + arrPersonajes.listarPersonajes()[peleador2] + " a: " + arrPersonajes.listarArmadura()[peleador2]);
            //Devuelve el ataque el Personaje2
            arrPersonajes.ataqueModicaArmadura(arrPersonajes.getpersonajes()[peleador2], arrPersonajes.getpersonajes()[peleador1], round);
            console.log(arrPersonajes.listarPersonajes()[peleador2] + " Da un Golape Basico de " + arrPersonajes.listargolpeBasico()[peleador2] + " Devilitando armadura de :" + arrPersonajes.listarPersonajes()[peleador1] + " a: " + arrPersonajes.listarArmadura()[peleador1]);
            round++;
            if (round > 3) {
                arrPersonajes.listargolpeBasico()[0];
            }
        }
    }
    else {
        console.log("inicia el combate: ", arrPersonajes.listarPersonajes()[peleador2]);
        while (arrPersonajes.listarArmadura()[peleador1] > arrPersonajes.listargolpeBasico()[peleador2] && arrPersonajes.listarArmadura()[peleador2] > arrPersonajes.listargolpeBasico()[peleador1]) {
            console.log(" ...Round " + round + " ... ");
            // ataca primero el Personaje1
            arrPersonajes.ataqueModicaArmadura(arrPersonajes.getpersonajes()[peleador1], arrPersonajes.getpersonajes()[peleador2], round);
            console.log(arrPersonajes.listarPersonajes()[peleador1] + " Da un Golape Basico de " + arrPersonajes.listargolpeBasico()[peleador1] + " Devilitando armadura de " + arrPersonajes.listarPersonajes()[peleador2] + " a: " + arrPersonajes.listarArmadura()[peleador2]);
            //Devuelve el ataque el Personaje2
            arrPersonajes.ataqueModicaArmadura(arrPersonajes.getpersonajes()[peleador2], arrPersonajes.getpersonajes()[peleador1], round);
            console.log(arrPersonajes.listarPersonajes()[peleador2] + " Da un Golape Basico de " + arrPersonajes.listargolpeBasico()[peleador2] + " Devilitando armadura de " + arrPersonajes.listarPersonajes()[peleador1] + " a: " + arrPersonajes.listarArmadura()[peleador1]);
            round++;
        }
    }
    // se compara para Mostrar el ganador
    if (arrPersonajes.listarArmadura()[peleador1] > arrPersonajes.listarArmadura()[peleador2]) {
        console.log(" El Ganador de la Pelea es: ", arrPersonajes.listarPersonajes()[peleador1]);
    }
    else if (arrPersonajes.listarArmadura()[peleador1] < arrPersonajes.listarArmadura()[peleador2]) {
        console.log(" El Ganador de la Pelea es: ", arrPersonajes.listarPersonajes()[peleador2]);
    }
    else {
        console.log(" La pelea es un empate ");
    }
}
console.log("------------------------------------------------------------------");
console.log("-     Elija Su Luchador                                          -");
console.log("-                                                                -");
console.log("-     0_Goku            1_Vegueta           2_Broly              -");
console.log("-                                                                -");
console.log("-     3_IronMan         4_Hulck             5_Thor               -");
console.log("-                                                                -");
console.log("------------------------------------------------------------------");
function validarEleccion() {
    var peleador1 = parseInt(rsl.question("Seleccione primer Peleador : "), 10);
    while (peleador1 < 0 || peleador1 > 5 || peleador1 == undefined) {
        console.log("El primer peleador es invalido");
        var peleador1Valid = parseInt(rsl.question("Seleccione nuevamente primer Peleador : "), 10);
        peleador1 = peleador1Valid;
    }
    var peleador2 = parseInt(rsl.question("Seleccione Segundo Peleador : "), 10);
    while (peleador2 < 0 || peleador2 > 5 || peleador2 == peleador1 || peleador1 == undefined) {
        console.log("El segundo peleador es invalido");
        var peleador2Valid = parseInt(rsl.question("Seleccione nuevamente primer Peleador : "), 10);
        peleador2 = peleador2Valid;
    }
    // Mostramos los contendientes y sus habilidades
    console.log("la pelea sera entre : ");
    console.log(arrPersonajes.listarPersonajes()[peleador1] + " Con una resistencia armadura de: " + arrPersonajes.listarArmadura()[peleador1] + " y un golpe Basico de " + arrPersonajes.listargolpeBasico()[peleador1]);
    console.log("           VS               ");
    console.log(arrPersonajes.listarPersonajes()[peleador2] + " Con una resistencia armadura de: " + arrPersonajes.listarArmadura()[peleador2] + " y un golpe Basico de " + arrPersonajes.listargolpeBasico()[peleador2]);
    console.log("-------------------------------------------------------------------------");
    combate(peleador1, peleador2); //paso parametros para funcion Combate
}
validarEleccion();
