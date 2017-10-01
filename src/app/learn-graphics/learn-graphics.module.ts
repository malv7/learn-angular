import { BrowserModule } from '@angular/platform-browser';
import { LearnGraphicsComponent } from './learn-graphics.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        LearnGraphicsComponent
    ],
    exports: [
        LearnGraphicsComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: []
})
export class LearnGraphicsModule {
    
}