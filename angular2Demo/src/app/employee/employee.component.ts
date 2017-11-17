import { Component } from '@angular/core'
@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})
export class EmployeeComponent {
    firstName: string = "Vishnu";
    lastName: string = "Mallipudi";
    gender: string = "Male";
    age: number = 24;
    showDetails: boolean = true;
    onClick() {
        this.showDetails = !this.showDetails;
        console.log(this.showDetails);
    }
}