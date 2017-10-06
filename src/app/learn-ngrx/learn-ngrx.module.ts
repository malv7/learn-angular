import { LearnNgrxComponent } from './learn-ngrx.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// Components
import { CounterComponent } from "./counter/counter.component";

@NgModule({
    imports: [ 
        BrowserModule,
    ],
    exports: [ LearnNgrxComponent ],
    providers: [],
    declarations: [ LearnNgrxComponent, CounterComponent ]
})
export class LearnNgrxModule { }