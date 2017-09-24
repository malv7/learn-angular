import { Component } from "@angular/core";

@Component({
    selector: 'tour-of-heroes',
    template: `
        <h1 class="title smooth">{{title}}</h1>
        <a routerLink="/dashboard" class="button">Dashboard</a>
        <a routerLink="/heroes" class="button">Heroes</a>
        <div [ngStyle]="{ 'margin-top': '30px'}"></div>
        <router-outlet></router-outlet>
    `,
    styles: [`
        .smooth {
            text-shadow: 1px 10px 20px #ffdd57, 0 0 25px #ffdd57, 0 0 5px #ffdd57;
        }
    `]
})
export class TourOfHeroesComponent { 
    title = 'heroes!';
}