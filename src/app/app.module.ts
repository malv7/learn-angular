import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JokeModule } from './joke/joke.module';
import { TourOfHeroesModule } from './tour-of-heroes/tour-of-heroes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JokeModule,
    TourOfHeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
