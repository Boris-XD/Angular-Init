import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  public data: string[] = ['Boris', 'Franz', 'Nilo', 'Luz'];
  public erase: string = "";

  eraseHero(): void {
    this.erase = this.data.pop() || "";
  }
}
