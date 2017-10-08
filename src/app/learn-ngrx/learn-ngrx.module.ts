import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// Components
import { AdvancedCounterComponent } from './counter/advanced-counter.component';
import { CounterComponent } from "./counter/counter.component";
import { LearnNgrxComponent } from './learn-ngrx.component';

@NgModule({
    imports: [ BrowserModule ],
    exports: [ LearnNgrxComponent ],
    declarations: [ LearnNgrxComponent, CounterComponent, AdvancedCounterComponent ]
})
export class LearnNgrxModule { }