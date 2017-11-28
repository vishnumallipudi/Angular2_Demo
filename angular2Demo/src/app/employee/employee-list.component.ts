import { Component } from '@angular/core';
import { IEmployee } from '../employee/employee';
@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employee-list.component.html',
    styleUrls: ['app/employee/employee-list.component.css']
})
export class EmployeeListComponent {
    employees: IEmployee[];

       // This property keeps track of which radio button is selected
    // We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedEmpCountRadiobtn: string = 'All';
    constructor() {
        this.employees = [
            { Id: 1, FirstName: 'vishnu', LastName: 'Mallipudi', Gender: 'male', Dept: 'IT', Salary: '555.3', Dob: new Date( '6/15/1994' )},
            { Id: 2, FirstName: 'Venkatesh', LastName: 'Sadineni', Gender: 'male', Dept: 'IT', Salary: '555.3', Dob: new Date('6/15/1994') },
            { Id: 3, FirstName: 'Saibaba', LastName: 'Vinnakota', Gender: 'female', Dept: 'IT', Salary: '895.3333', Dob: new Date('6/15/1994' )},
            { Id: 4, FirstName: 'Naveen', LastName: 'Tanakala', Gender: 'male', Dept: 'IT', Salary: '143', Dob: new Date( '6/15/1994' )},
            { Id: 5, FirstName: 'Naveen2', LastName: 'Tanakala', Gender: 'male', Dept: 'IT', Salary: '948.36', Dob: new Date('6/15/1994') },
        ];
    }


    getTotalMaleEmployees(): number {
        return this.employees.filter(e => e.Gender === "male").length;
    }
    getTotalFemaleEmployees(): number {
        return this.employees.filter(e => e.Gender === "female").length;
    }
    getTotalEmployees(): number {
        return this.employees.length;
    }


        // Depending on which radio button is selected, this method updates
    // selectedEmployeeCountRadioButton property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    onEmpCountRadiobtnChange(selectedRadiobtnValue: string): void {
        this.selectedEmpCountRadiobtn = selectedRadiobtnValue;
    }

}