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
            { Id: 1, FirstName: 'vishnu', LastName: 'Mallipudi', Dept: 'IT' },
            { Id: 2, FirstName: 'Venkatesh', LastName: 'Sadineni', Dept: 'IT' },
            { Id: 3, FirstName: 'Saibaba', LastName: 'Vinnakota', Dept: 'IT' },
            { Id: 4, FirstName: 'Naveen', LastName: 'Tanakala', Dept: 'IT' },
        ];
    }
    getEmployees() {
        this.employees = [
            { Id: 1, FirstName: 'vishnu', LastName: 'Mallipudi', Dept: 'IT' },
            { Id: 2, FirstName: 'Venkatesh', LastName: 'Sadineni', Dept: 'IT' },
            { Id: 3, FirstName: 'Saibaba', LastName: 'Vinnakota', Dept: 'IT' },
            { Id: 4, FirstName: 'Naveen', LastName: 'Tanakala', Dept: 'IT' },
            { Id: 5, FirstName: 'Naveen2', LastName: 'Tanakala', Dept: 'IT' },
        ];
    }
    trackByEmpId(index: number, emp: any): string {
        return emp.Id;
    }
}