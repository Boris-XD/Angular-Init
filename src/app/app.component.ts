import { Component } from '@angular/core';

@Component({
    selector:'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {
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
