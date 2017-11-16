import { Component } from '@angular/core'
@Component({
    selector: 'my-employee',
    templateUrl:'app/employee/employee.component.html'
})
export class EmployeeComponent {
    firstName: string = "Vishnu";
    lastName: string = "Mallipudi";
    gender: string = "Male";
    Age: number = 20;
}