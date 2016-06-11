import { Component, OnInit } from '@angular/core';
import { IJoke } from '../shared/interfaces/index';
import { JokeService } from '../shared/services/index';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers: [JokeService] // required to import JokeService
})

// OnInit means whenever the component is initialized, we run these codes
export class DashboardComponent implements OnInit {

  // declare a variable joke that is a type of IJoke
  public item: IJoke;

  // used to inject services from another class
  constructor(private jokeSvc: JokeService) {}

  ngOnInit() {
    // call server api to get joke
    // todo: move to service
    this.item = this.jokeSvc.getJoke();
  }

}

