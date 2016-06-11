import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { DashboardComponent } from './+dashboard';
import { CategoriesComponent } from './+categories';
import { CustomiseComponent } from './+customise';

@Component({
  moduleId: module.id,
  selector: 'hello-world-app',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['hello-world.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

@Routes([
  {path: '/dashboard', component: DashboardComponent},
  {path: '/categories', component: CategoriesComponent},
  {path: '/customise', component: CustomiseComponent}
])

export class HelloWorldAppComponent {
  title = 'Angular Jokes';

}
