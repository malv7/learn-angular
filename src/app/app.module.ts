import { GenericFormsModule } from './generic-forms/generic-forms.module';
import { FormsModule } from '@angular/forms';

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

// Malv ngrx playground
import { MalvNgrxModule } from './malv-ngrx-playground/malv-ngrx.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './malv-ngrx-playground/counter/counter.reducers';

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
    FormsModule,
    HttpModule,
    JokeModule,
    RouterModule.forRoot(routes),
    TourOfHeroesModule,
    MalvNgrxModule,
    GenericFormsModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
  exports: [FormsModule],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
