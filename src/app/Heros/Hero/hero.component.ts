import { Component } from "@angular/core";



@Component({
    selector:'app-hero',
    templateUrl:'./hero.component.html'
})
export class HeroComponent{
    public name: string   = "Iron Man";
    public year: number     = 35;
    
    get capitalizeName(): string{
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${this.name} - ${this.year}`;
    }

}