
import {Atributos} from "./AtrubGral";

export class persDragBallZ extends Atributos{

    private ki: number;

    constructor(dirImagen:string,nombre:string, golpeBasico:number, armadura:number, ki:number ){
        super( dirImagen, nombre, golpeBasico, armadura);
        this.ki=ki;
    }

    public getki() : number {
        return this.ki
    }

    public setki(ki : number) {
        this.ki = ki;
    }
    
}

