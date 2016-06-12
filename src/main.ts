import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HelloWorldAppComponent, environment } from './app/';
import 'rxjs/Rx';
import { HTTP_PROVIDERS } from '@angular/http'; // need to import to be able to use it in the whole application
import { JokeService } from './app/shared/services/index';


if (environment.production) {
  enableProdMode();
}

bootstrap(HelloWorldAppComponent, [
  HTTP_PROVIDERS, JokeService
]);

