import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Hero } from './../tour-of-heroes/hero';
import { Component } from "@angular/core";

@Component({
    selector: 'ngrx-playground',
    template: `
        <ngrx-counter></ngrx-counter>
        <button class="button" (click)="behave()">behavior</button>
    `,
    styles: [``]
})
export class MalvNgrxPlaygroundComponent {
    
    behaviorSubject: BehaviorSubject<Hero>;

    constructor() {
        let name = this.buildName("malv", "yoyo", "yo", "yoyoyo");
        console.log(name);

        this.behaviorSubject = new BehaviorSubject<Hero>(null);
        this.behaviorSubject.asObservable().subscribe(d => console.log(Math.random()));
    }

    buildName(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }

    behave() {
        this.behaviorSubject.next(new Hero());
    }

}