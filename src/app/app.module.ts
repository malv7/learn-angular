// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Feature modules
import { LearnObservablesModule } from './learn-observables/learn-observables.module';
import { LearnTypescriptModule } from './learn-typescript/learn-typescript.module';
import { LearnGraphicsModule } from './learn-graphics/learn-graphics.module';
import { TourOfHeroesModule } from './tour-of-heroes/tour-of-heroes.module';
import { SlitesModule } from './slites/slites.module';
import { JokeModule } from './joke/joke.module';


// ngrx
import { StoreModule } from '@ngrx/store';
import { LearnNgrxModule } from './learn-ngrx/learn-ngrx.module';
// reducers
import { counterReducer } from './learn-ngrx/counter/counter.reducers';

// Directives
import { DirectivesModule } from './directives/directives.module';

// Components
import { HeroDashboardComponent } from './tour-of-heroes/hero-dashboard/hero-dashboard.component';
import { HeroListComponent } from './tour-of-heroes/hero-list/hero-list.component';
import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseService } from './learn-firebase/firebase.service';


const routes: Routes = [
  {
    path: '',
    // redirectTo: '/dashboard',
    redirectTo: '',
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
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      counter: counterReducer
    }),
    // AngularFireModule.initializeApp(firebaseConfig, 'learn-angular'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DirectivesModule,

    // Feature Modules
    JokeModule,
    TourOfHeroesModule,
    LearnNgrxModule,
    LearnObservablesModule,
    LearnGraphicsModule,
    LearnTypescriptModule,
    SlitesModule    
  ],
  exports: [ FormsModule ],
  providers: [ FirebaseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
