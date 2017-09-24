import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeService } from './joke.service';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ JokeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
