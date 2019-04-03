import './demo'
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { PreloadAllModules, RouterModule } from '@angular/router';

RouterModule.forRoot(
  [
   {
      path: 'second',
      loadChildren: './second/second.module#SecondModule'
   } 
  ], {preloadingStrategy: PreloadAllModules})

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  