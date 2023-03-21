import { Component } from '@angular/core';

@Component({
    selector:'counter-app',
    template: `
    <h1>{{ title }}</h1>
    <h3>Numero Base {{ baseCounter }}</h3>
    <button (click)="acumular(baseCounter)">Increment {{ baseCounter }}</button>

    <h3>{{ counter }}</h3>

    <button (click)="acumular((-1)*(baseCounter))">Decrement {{ baseCounter}}</button>
    <!-- <button (click)="acumular(-baseCounter)">Decrement {{ baseCounter}}</button> -->
    `
})

export class CounterComponent {
  public title: string = 'My Counter';
  public counter: number = 0;
  public baseCounter: number = 5;
  public sumar = (): number => {
    this.counter ++;
    return this.counter;
  }
  public restar = (): number => {
    this.counter --;
    return this.counter;
  }

  acumular(value: number){
    this.counter += value;
  }
}
