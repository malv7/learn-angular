import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from "./hero.service";
import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroDashboardComponent } from "./hero-dashboard/hero-dashboard.component";
import { TourOfHeroesComponent } from "./tour-of-heroes.component";

const heroesRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroListComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'dashboard',
        component: HeroDashboardComponent
    }
]

@NgModule({
    declarations: [
        HeroListComponent,
        HeroDetailComponent,
        HeroDashboardComponent,
        TourOfHeroesComponent
    ],
    providers: [
        HeroService
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(heroesRoutes)
    ],
    exports: [
        TourOfHeroesComponent
    ]
})
export class TourOfHeroesModule { }