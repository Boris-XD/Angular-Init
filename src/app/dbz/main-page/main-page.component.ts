import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbs.interface';

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
  public personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 120
    },
    {
      nombre: "Vegeta",
      poder: 100
    }
  ]
  agregar(){
    if(this.personaje.nombre.trim().length === 0) return;
    this.personajes.push(this.personaje);
    this.personaje = {
      nombre: "",
      poder: 0
    }
  }
}
