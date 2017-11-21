import { Component } from '@angular/core'
@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employee-list.component.html',
    styleUrls:['app/employee/employee-list.component.css']
})
export class EmployeeListComponent {
    employees: any[];
    constructor() {
        this.employees = [
            { Id: 1, FirstName: 'vishnu', LastName: 'Mallipudi', Dept: 'IT', Salary: '555.3', Dob: '6/15/1994' },
            { Id: 2, FirstName: 'Venkatesh', LastName: 'Sadineni', Dept: 'IT', Salary: '555.3', Dob: '6/15/1994' },
            { Id: 3, FirstName: 'Saibaba', LastName: 'Vinnakota', Dept: 'IT', Salary: '895.3333', Dob: '6/15/1994' },
            { Id: 4, FirstName: 'Naveen', LastName: 'Tanakala', Dept: 'IT', Salary: '143', Dob: '6/15/1994' },
            { Id: 5, FirstName: 'Naveen2', LastName: 'Tanakala', Dept: 'IT', Salary: '948.36', Dob: '6/15/1994' },
        ];
    }
    getEmployees() {
        this.employees = [
            { Id: 1, FirstName: 'vishnu', LastName: 'Mallipudi', Dept: 'IT',Salary:'555.3',Dob:'6/15/1994' },
            { Id: 2, FirstName: 'Venkatesh', LastName: 'Sadineni', Dept: 'IT', Salary: '555.3', Dob: '6/15/1994' },
            { Id: 3, FirstName: 'Saibaba', LastName: 'Vinnakota', Dept: 'IT', Salary: '895.3333', Dob: '6/15/1994' },
            { Id: 4, FirstName: 'Naveen', LastName: 'Tanakala', Dept: 'IT', Salary: '143', Dob: '6/15/1994' },
            { Id: 5, FirstName: 'Naveen2', LastName: 'Tanakala', Dept: 'IT', Salary: '948.363', Dob: '6/15/1994' },
        ];
    }
    trackByEmpId(index: number, emp: any): string {
        return emp.Id;
    }
}