import { Atributos } from "./AtrubGral";

export class Personajes {
   private personajes : Atributos[];

   constructor (personajes:Atributos[]){
        this.personajes=personajes;
   }
   
   public getpersonajes():Atributos[] {
    return this.personajes;
   }
   
   public setpersonajes(personajes:Atributos[]) {
    this.personajes = personajes;
   }

   // Método para obtener todas de los personajes
   armaduras(): number[] {
      return this.personajes.map(personaje => personaje.getarmadura());
   }

   golpeBasico(): number[] {
      return this.personajes.map(personaje => personaje.getgolpeBasico());
   }

   ataqueModicaArmadura(personaje1:Atributos, personaje2:Atributos): void {
      
      let restaArmadura:number = personaje2.getarmadura()-personaje1.getgolpeBasico();
      
      personaje2.setarmadura(restaArmadura);
   }
  
   // Método para listar los nombres de los personajes
   listarPersonajes(): string[] {
      return this.personajes.map(personaje => personaje.getnombre());
   }

   listarArmadura(): number[] {
      return this.personajes.map(personaje => personaje.getarmadura());
   }

   listargolpeBasico(): number[] {
      return this.personajes.map(personaje => personaje.getgolpeBasico());
   }
}
