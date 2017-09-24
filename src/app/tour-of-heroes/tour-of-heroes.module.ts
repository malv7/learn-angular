import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TourOfHeroesComponent } from "./tour-of-heroes/tour-of-heroes.component";

@NgModule({
    declarations: [
        TourOfHeroesComponent
    ],
    providers: [

    ],
    imports: [
        BrowserModule
    ],
    exports: [
        TourOfHeroesComponent
    ]
})
export class TourOfHeroesModule { }