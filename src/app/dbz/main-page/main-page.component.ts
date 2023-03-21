import { Component } from '@angular/core';

interface Personaje{
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public personaje: Personaje = {
    nombre: "Trunks",
    poder: 122
  }
  agregar(){
    console.log(this.personaje)
    console.log("Ejecuntado con ngForms")
  }
}
