import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './src/app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Destroying Angular on restore
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Record the boot error
}).catch(err => console.error(err));
