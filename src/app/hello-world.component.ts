import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hello-world-app',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['hello-world.component.css']
})

export class HelloWorldAppComponent {
  public title = 'hello-world!';

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
  };

  newEmployee = new Employee();
  childEMployee = new childEmployee();

  init() {
    this.employee.name
    // can only access public name
  };
}

export class Employee {
  public name: string;
  private age: number;
  static company: string;
  protected mySalary(): number {
    return 10
  }
}

export class childEmployee extends Employee {
  constructor() {
    super();
    this.mySalary
    // can call protected methods from parent class
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