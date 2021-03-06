import { Injectable } from '@angular/core';
import { IJoke, IJokeFromApi } from '../interfaces/index';
import { Http } from '@angular/http'; // used to call api
import { Observable } from 'rxjs/Observable';
// rxjs is library that AngularJS 2 uses
// ( need to import whole rxjs lib in main.ts file first)

@Injectable()
// declares that this is a service

export class JokeService {

  constructor(private http: Http) {} // can use get/post/put/delete in http

  public apiUrl = 'https://api.icndb.com/';

  public getJokesByCategories(category: string) {
    const apiUrl = this.apiUrl + 'jokes/random/5?limitTo=[' + category + ']'

    return this.http
      .get(apiUrl)
      .map(response => response.json()) // result is returned in json format, so need to parse it
      .map((jsonResult: IJokeFromApi) => jsonResult.value)
      ;
  }

  public getCategories(): Observable<string[]> {
    const apiUrl = this.apiUrl + 'categories';

    return this.http
      .get(apiUrl)
      .map(response => response.json()) // result is returned in json format, so need to parse it
      .map(jsonResult => jsonResult.value)
      ;
  }

  public getJoke(): Observable<IJoke> { //observable makes it async
    const apiUrl = this.apiUrl + 'jokes/random';
    // todo: call http api
    // return {
    //   id: 1,
    //   joke: 'Hahahahahahah'
    // }

    return this.http
      .get(apiUrl)
      .map(response => response.json()) // result is returned in json format, so need to parse it
      .map((jsonResult: IJokeFromApi) => jsonResult.value)
      ;
  }

}
