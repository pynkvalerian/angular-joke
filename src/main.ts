import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HelloWorldAppComponent, environment } from './app/';
import 'rxjs/Rx';
import { HTTP_PROVIDERS } from '@angular/http'; // used to call api

if (environment.production) {
  enableProdMode();
}

bootstrap(HelloWorldAppComponent, [
  HTTP_PROVIDERS
]);

