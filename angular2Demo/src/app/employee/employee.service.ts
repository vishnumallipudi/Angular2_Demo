import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { IEmployee } from '../employee/employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()



export class EmployeeService {
    constructor(private _http: Http) {  }

    getEmployees():IEmployee[] {

        return [
            {
                Id: 101, FirstName: 'Tom', Gender: 'Male', Salary: '5500', Dob: '6/25/1988', Dept: 'IT', LastName:'Tom'
            },
            {
                Id: 102, FirstName: 'Alex', Gender: 'Male', Salary: '5700.95', Dob: '9/6/1982', Dept: 'IT', LastName: 'Alex'
            },  
            {   
                Id: 103, FirstName: 'Mike', Gender: 'Male', Salary: '5900', Dob: '12/8/1979', Dept: 'IT', LastName: 'Mike'
            },  
            {   
                Id: 104, FirstName: 'Mary', Gender: 'Female', Salary: '6500.826', Dob: '10/14/1980', Dept: 'IT', LastName: 'Mary'
            },  
            {   
                Id: 105, FirstName: 'Nancy', Gender: 'Female', Salary: '6700.826', Dob: '12/15/1982', Dept: 'IT', LastName: 'Nancy'
            },  
            {   
                Id: 106, FirstName: 'Steve', Gender: 'Male', Salary: '7700.481', Dob: '11/18/1979', Dept: 'IT', LastName: 'Steve'
            },
        ];

    }

}