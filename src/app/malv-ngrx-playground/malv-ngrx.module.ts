import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// Components
import { MalvNgrxPlaygroundComponent } from "./malv-ngrx-playground.component";
import { CounterComponent } from "./counter/counter.component";

@NgModule({
    imports: [ BrowserModule ],
    exports: [ MalvNgrxPlaygroundComponent ],
    providers: [],
    declarations: [ MalvNgrxPlaygroundComponent, CounterComponent ]
})
export class MalvNgrxModule { }