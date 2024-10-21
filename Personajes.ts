import { Atributos } from "./Atributos";
import { persDragBallZ } from "./persDragBallZ";
import { persMarvel } from "./persMarvel";

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

   ataqueModicaArmadura(personaje1:Atributos, personaje2:Atributos, round:number): void {
      if (personaje1 instanceof persDragBallZ && round == 3){// se compara cada personaje, iterando en el main
         console.log(personaje1.getnombre()+" se transfora en super Saiyajin ");
         personaje1.setEvoluciona(personaje1);
      }
      if (personaje1 instanceof persMarvel && round == 4){ //Round 4 usan poder especial.
         let restaArmaduraPoder:number = personaje2.getarmadura()-personaje1.getpoder();
        
         if (personaje1.getnombre()=="IronMan" ){ // Ataque especial Marvel (complementoal basico)
            console.log(" IronMan Ataca con Rayo Uni con un daño adicional de "+personaje1.getpoder()+" restando "+restaArmaduraPoder+ " Armadura");
            personaje2.setarmadura(restaArmaduraPoder);
         }else if (personaje1.getnombre()=="Hulk" ){
            console.log(" Hulk Ataca con Furia con un daño de adicional de "+personaje1.getpoder()+" restando "+restaArmaduraPoder+ " Armadura");
            personaje2.setarmadura(restaArmaduraPoder);
         }else {
            console.log(" Thor Ataca con Golpe de Trueno con un daño de adicional de "+personaje1.getpoder()+" restando "+restaArmaduraPoder+ " Armadura");
            personaje2.setarmadura(restaArmaduraPoder);
         }
      }
      
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
