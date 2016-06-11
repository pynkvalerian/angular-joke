import { Component } from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'hello-world-app',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['hello-world.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@Routes([
  {path: '/dashboard', component: DashboardComponent}
])

export class HelloWorldAppComponent {
  title = 'Angular Jokes';

}
