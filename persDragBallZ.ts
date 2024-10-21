
import {Atributos} from "./Atributos"

export class persDragBallZ extends Atributos{ //Puede evolucionar a Super Saiyajin

    private superSaiyajin: boolean; 

    constructor(dirImagen:string,nombre:string, golpeBasico:number, armadura:number, superSaiyajin:boolean ){
        super( dirImagen, nombre, golpeBasico, armadura);
        this.superSaiyajin=superSaiyajin;
    }

    public getSuperSaiyajin() : boolean {
        return this.superSaiyajin;
    }
    
    public setEvoluciona(personaje1:Atributos):void{
        let evolucion: boolean=true;
        this.superSaiyajin = evolucion;
        this.setSuperSaiyajin(evolucion,personaje1);
    }
    
       
    public setSuperSaiyajin(superSaiyajin : boolean,personaje1:Atributos) {
        this.superSaiyajin = superSaiyajin;
        if (superSaiyajin){
            this.modificarGolpeBasico(personaje1);
            this.modificarArmadura(personaje1);
        }
    }
  
    public modificarGolpeBasico (personaje1:Atributos):void{
        let aux =personaje1.getgolpeBasico();
        aux= Math.round(aux*(1.15)); // aumenta el golpeBasico 15%
        console.log("Aumenta Golpe Basico un 10 % ",aux);
        personaje1.setgolpeBasico(aux);
    }

    public modificarArmadura (personaje1:Atributos):void{
        let aux =personaje1.getarmadura();
        aux= Math.round(aux*(1.15)); // aumenta la armadura 15%
        console.log("Aumenta resistencia Armadura 10 % ",aux);
        this.setarmadura(aux);
    }
    

}

