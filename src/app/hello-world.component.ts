import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hello-world-app',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['hello-world.component.css']
})

export class HelloWorldAppComponent {
  public title = 'hello-world!';

  private yourName: string = '';
  static abc; // dont need to initialize class, and it can be called

  // protected : child can access protected methods from parent
  protected customer: ICustomer = {
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