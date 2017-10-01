import { FirebaseService } from './firebase/firebase.service';
import { DirectivesModule } from './directives/directives.module';

import { FormsModule } from '@angular/forms';

// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// Feature modules
import { LearnObservablesModule } from './learn-observables/learn-observables.module';
import { LearnGraphicsModule } from './learn-graphics/learn-graphics.module';
import { TourOfHeroesModule } from './tour-of-heroes/tour-of-heroes.module';
import { JokeModule } from './joke/joke.module';

// Components
import { HeroDashboardComponent } from './tour-of-heroes/hero-dashboard/hero-dashboard.component';
import { HeroListComponent } from './tour-of-heroes/hero-list/hero-list.component';
import { AppComponent } from './app.component';

// ngrx playground
import { counterReducer } from './malv-ngrx-playground/counter/counter.reducers';
import { MalvNgrxModule } from './malv-ngrx-playground/malv-ngrx.module';
import { StoreModule } from '@ngrx/store';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './firebase/firebase.config';

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
    // AngularFireModule.initializeApp(firebaseConfig, 'learn-angular'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpModule,
    JokeModule,
    RouterModule.forRoot(routes),
    TourOfHeroesModule,
    MalvNgrxModule,
    LearnObservablesModule,
    DirectivesModule,
    StoreModule.forRoot({ counter: counterReducer }),
    LearnGraphicsModule
  ],
  exports: [ FormsModule ],
  providers: [ FirebaseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
