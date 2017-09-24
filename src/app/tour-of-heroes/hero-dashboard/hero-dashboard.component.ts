import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { Router } from "@angular/router";

@Component({
    selector: 'hero-dashboard',
    templateUrl: `./hero-dashboard.component.html`,
    styles: [`
        .hover:hover {
            cursor: pointer;
            color: #ffdd57;
        }
    `]
})
export class HeroDashboardComponent implements OnInit {

    heroes: Hero[];

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    goToDetail(hero: Hero) {
        this.router.navigate(['/detail', hero.id]);
    }

}