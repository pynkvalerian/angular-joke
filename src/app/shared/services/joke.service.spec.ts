import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { JokeService } from './joke.service';

describe('Joke Service', () => {
  beforeEachProviders(() => [JokeService]);

  it('should ...',
      inject([JokeService], (service: JokeService) => {
    expect(service).toBeTruthy();
  }));
});
