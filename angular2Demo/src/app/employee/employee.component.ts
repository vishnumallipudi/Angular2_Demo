import { Component } from '@angular/core'
@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'
})
export class EmployeeComponent {
    exmodel: string = "Tom";
    firstName: string = "Vishnu";
    lastName: string = "Mallipudi";
    gender: string = "Male";
    age: number = 24;
    showDetails: boolean = true;
    onClick(event: MouseEvent) {
        this.showDetails = !this.showDetails;
        console.log(this.showDetails);
        console.log(event.target);
    }
    modelClick(e: any) {
        this.exmodel = e.target.value;
        console.log(this.exmodel);
    }
}