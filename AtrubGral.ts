

export class Atributos{
    private dirImagen:string;
    private nombre:string;
    protected golpeBasico:number;
    private armadura:number;

    constructor (dirImagen:string,nombre:string, golpeBasico:number, armadura:number){
       this.dirImagen=dirImagen;
        this.nombre=nombre;
        this.golpeBasico=golpeBasico;
        this.armadura=armadura;
    }

    public getdirImagen() : string {
        return this.dirImagen;
    }
    
    public getnombre() : string {
        return this.nombre;
    }
    
    public getgolpeBasico() : number {
        return this.golpeBasico;
    }

    public getarmadura() : number {
        return this.armadura;
    }

   
    public setgolpeBasico(golpeBasico : number) {
        this.golpeBasico = golpeBasico;
    }

    public setarmadura(armadura : number) {
        this.armadura = armadura;
    }

    
}
