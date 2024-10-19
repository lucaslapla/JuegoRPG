
// Tercer entregable Juego
"use Strict"
import   * as rsl from "readline-sync"
import { Personajes} from "./Personajes";
import { persDragBallZ } from "./persDragBallZ";
import { persMarvel } from "./persMarvel";


//Se cargan los Personajes
let goku    :persDragBallZ =new persDragBallZ("./Goku",    "Goku"   , 90 , 540, 100);
let vegueta :persDragBallZ =new persDragBallZ( "./Vegueta","Vegueta", 85 , 550, 95);
let broly   :persDragBallZ =new persDragBallZ("./Broly",   "Broly"  , 100, 510, 120);
let ironMan :persMarvel = new persMarvel     ("./Ironman", "IronMan", 75 , 600, 80);
let hulk    :persMarvel = new persMarvel     ("./Hulck" ,  "Hulk"   , 95 , 600, 100);
let thor    :persMarvel = new persMarvel     ("./Thor"   , "Thor"   , 90 , 500, 95);

const arrPersonajes= new Personajes([goku,vegueta,broly,ironMan,hulk,thor]);

// Funcion para la lucha

function combate (peleador1:number, peleador2:number){
    console.log("Inicia la pelea");
    let sorteoinicio = Math.floor(Math.random() * (2 - 1 + 1)) + 1;// Generoun random para ver quien inicia
    let round :number = 1;
    if (sorteoinicio==1){ 
        console.log ("inicia el combate: "+ arrPersonajes.listarPersonajes()[peleador1]);
        while (arrPersonajes.listarArmadura()[peleador1]>arrPersonajes.listargolpeBasico()[peleador2]  &&   arrPersonajes.listarArmadura()[peleador2]>arrPersonajes.listargolpeBasico()[peleador1]){
            console.log(" ...Round "+round+" ... ");
            // ataca primero el Personaje1
            arrPersonajes.ataqueModicaArmadura(arrPersonajes.getpersonajes()[peleador1] , arrPersonajes.getpersonajes()[peleador2]);
            console.log(arrPersonajes.listarPersonajes()[peleador1]+" Da un Golape Basico de "+arrPersonajes.listargolpeBasico()[peleador1]+" Devilitando armadura de "+arrPersonajes.listarPersonajes()[peleador2] +" a: "+arrPersonajes.listarArmadura()[peleador2]);
            //Devuelve el ataque el Personaje2
            arrPersonajes.ataqueModicaArmadura(arrPersonajes.getpersonajes()[peleador2] , arrPersonajes.getpersonajes()[peleador1]);
            console.log(arrPersonajes.listarPersonajes()[peleador2]+" Da un Golape Basico de "+arrPersonajes.listargolpeBasico()[peleador2]+" Devilitando armadura de :"+arrPersonajes.listarPersonajes()[peleador1] +" a: "+arrPersonajes.listarArmadura()[peleador1]);
            round++;
        }
    }else{
        console.log ("inicia el combate: ", arrPersonajes.listarPersonajes()[peleador2]);
        while (arrPersonajes.listarArmadura()[peleador1]>arrPersonajes.listargolpeBasico()[peleador2]  &&   arrPersonajes.listarArmadura()[peleador2]>arrPersonajes.listargolpeBasico()[peleador1]){
            console.log(" ...Round "+round+" ... ");
            // ataca primero el Personaje1
            arrPersonajes.ataqueModicaArmadura(arrPersonajes.getpersonajes()[peleador1] , arrPersonajes.getpersonajes()[peleador2]);
            console.log(arrPersonajes.listarPersonajes()[peleador1]+" Da un Golape Basico de "+arrPersonajes.listargolpeBasico()[peleador1]+" Devilitando armadura de "+arrPersonajes.listarPersonajes()[peleador2] +" a: "+arrPersonajes.listarArmadura()[peleador2]);
            //Devuelve el ataque el Personaje2
            arrPersonajes.ataqueModicaArmadura(arrPersonajes.getpersonajes()[peleador2] , arrPersonajes.getpersonajes()[peleador1]);
            console.log(arrPersonajes.listarPersonajes()[peleador2]+" Da un Golape Basico de "+arrPersonajes.listargolpeBasico()[peleador2]+" Devilitando armadura de "+arrPersonajes.listarPersonajes()[peleador1] +" a: "+arrPersonajes.listarArmadura()[peleador1]);
            round++;  
        }
    }
    // se compara para Mostrar el ganador
    if (arrPersonajes.listarArmadura()[peleador1]>arrPersonajes.listarArmadura()[peleador2]){
        console.log(" El Ganador de la Pelea es: ",arrPersonajes.listarPersonajes()[peleador1]);
    }else if (arrPersonajes.listarArmadura()[peleador1]<arrPersonajes.listarArmadura()[peleador2]){
        console.log(" El Ganador de la Pelea es: ",arrPersonajes.listarPersonajes()[peleador2]);
    }else{
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


function validarEleccion( ){
    let peleador1 :number = parseInt(rsl.question("Seleccione primer Peleador : "), 10);
    while(peleador1<0 || peleador1>5 || peleador1==undefined ){
        console.log("El primer peleador es invalido");
        let peleador1Valid :number = parseInt(rsl.question("Seleccione nuevamente primer Peleador : "), 10);
        peleador1=peleador1Valid;
    }

    let peleador2 :number = parseInt(rsl.question("Seleccione Segundo Peleador : "), 10);
    while(peleador2<0 || peleador2>5 || peleador2==peleador1 || peleador1==undefined){
        console.log("El segundo peleador es invalido");
        let peleador2Valid :number = parseInt(rsl.question("Seleccione nuevamente primer Peleador : "), 10);
        peleador2=peleador2Valid;
    }
    // Mostramos los contendientes y sus habilidades
    console.log("la pelea sera entre : ");
    console.log(arrPersonajes.listarPersonajes()[peleador1]+" Con una resistencia armadura de: "+arrPersonajes.listarArmadura()[peleador1]+" y un golpe Basico de "+arrPersonajes.listargolpeBasico()[peleador1]);
    console.log("           VS               ");
    console.log(arrPersonajes.listarPersonajes()[peleador2]+" Con una resistencia armadura de: "+arrPersonajes.listarArmadura()[peleador2]+" y un golpe Basico de "+arrPersonajes.listargolpeBasico()[peleador2]);  
    console.log("-------------------------------------------------------------------------");
    
    combate(peleador1,peleador2); //paso parametros para funcion Combate
}

validarEleccion();

