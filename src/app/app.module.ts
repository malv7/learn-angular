import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JokeModule } from './joke/joke.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JokeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
