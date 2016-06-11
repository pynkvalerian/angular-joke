import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HelloWorldAppComponent } from '../app/hello-world.component';

beforeEachProviders(() => [HelloWorldAppComponent]);

describe('App: HelloWorld', () => {
  it('should create the app',
      inject([HelloWorldAppComponent], (app: HelloWorldAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'hello-world works!\'',
      inject([HelloWorldAppComponent], (app: HelloWorldAppComponent) => {
    expect(app.title).toEqual('hello-world works!');
  }));
});
