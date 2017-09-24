// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Feature modules
import { JokeModule } from './joke/joke.module';
import { TourOfHeroesModule } from './tour-of-heroes/tour-of-heroes.module';

// Components
import { AppComponent } from './app.component';
import { HeroListComponent } from './tour-of-heroes/hero-list/hero-list.component';
import { HeroDashboardComponent } from './tour-of-heroes/hero-dashboard/hero-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JokeModule,
    RouterModule.forRoot(routes),
    TourOfHeroesModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
