import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hello-world-app',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['hello-world.component.css']
})

export class HelloWorldAppComponent {
  title = 'hello-world!';

  yourName: string = '';

  sayHello(name: string) {
    window.alert('Hello ' + name + '!');
  }
}
