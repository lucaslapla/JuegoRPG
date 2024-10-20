import {Atributos} from "./AtrubGral";

export class persMarvel extends Atributos{

    private poder: number;

    constructor(dirImagen:string,nombre:string, golpeBasico:number, armadura:number, poder:number ){
        super( dirImagen,nombre, golpeBasico, armadura);
        this.poder=poder;
    }

    public getpoder() : number {
        return this.poder;
    }
    
    public setpoder(poder : number) {
        this.poder = poder;
    }


}