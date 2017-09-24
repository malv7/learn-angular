import { Component } from "@angular/core";

@Component({
    selector: 'tour-of-heroes',
    template: `
        <h1 class="title">{{title}}</h1>
        <a routerLink="/dashboard" class="button" routerLinkActive="is-primary black">Dashboard</a>
        <a routerLink="/heroes" class="button" routerLinkActive="is-primary black">Heroes</a>
        <div [ngStyle]="{ 'margin-top': '30px'}"></div>
        <router-outlet></router-outlet>
    `,
    styles: [`
        .black {
            color: black;
        }
    `]
})
export class TourOfHeroesComponent { 
    title = 'ng heroes';
}