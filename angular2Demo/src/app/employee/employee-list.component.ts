import { Component, OnInit } from '@angular/core';
import { Injectable} from '@angular/core';
import { IEmployee } from '../employee/employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { EmployeeService } from './employee.service';
@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employee-list.component.html',
    styleUrls: ['app/employee/employee-list.component.css'],
    providers: [EmployeeService]
})
@Injectable()
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];

       // This property keeps track of which radio button is selected
    // We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedEmpCountRadiobtn: string = 'All';
    constructor(private _employeeService: EmployeeService) {
        
    }

    ngOnInit() {

        this.employees = this._employeeService.getEmployees();
    }

    getTotalMaleEmployees(): number {
        return this.employees.filter(e => e.Gender === "Male").length;
    }
    getTotalFemaleEmployees(): number {
        return this.employees.filter(e => e.Gender === "Female").length;
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