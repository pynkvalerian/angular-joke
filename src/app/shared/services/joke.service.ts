import { Injectable } from '@angular/core';
import { IJoke } from '../interfaces/index';

@Injectable()
// declares that this is a service

export class JokeService {

  constructor() {}

  public getJoke(): IJoke {
    // todo: call http api
    return {
      id: '1',
      joke: 'Hahahahahahah'
    }
  }

}
