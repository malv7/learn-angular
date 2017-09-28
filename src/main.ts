import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// #1 this is the entry point of the application
// it gets boottrapped by a special platform engine
// e.g. the browser or mobile or whatever
// goto #2 [app.module.ts] bootstrap porcess of the root component
platformBrowserDynamic().bootstrapModule(AppModule);