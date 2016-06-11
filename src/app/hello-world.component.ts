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
  customer: ICustomer = {
    name: 'Jane',
    age: 30,
    isSingle: true,
    gender: 'F'
  };

  sayHello(name: string) {
    console.log(this.customer.name);
    window.alert('Hello ' + name + '!');
  }
}

// implementing strong type for typescript
export interface ICustomer {
  name: string;
  age: number;
  isSingle: boolean;
  // to define optional type, ie isSingle?: boolean
  gender: string;
}