import { LearnObservableComponent } from './learn-observables.component';
import { LearnPromisesComponent } from './learn-promises.component';
import { DirectivesModule } from './../directives/directives.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [ 
        DirectivesModule,
        BrowserModule, 
        FormsModule
    ],
    exports: [ 
        LearnObservableComponent 
    ],
    declarations: [ 
        LearnObservableComponent, 
        LearnPromisesComponent 
    ],
    providers:[]
})
export class LearnObservablesModule { }