import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HelloWorldAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(HelloWorldAppComponent);

