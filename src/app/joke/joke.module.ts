import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { JokeComponent } from "./joke.component";
import { JokeService } from "./joke.service";

@NgModule({
    declarations: [
        JokeComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        JokeService
    ],
    exports: [
        JokeComponent
    ]
})
export class JokeModule { }