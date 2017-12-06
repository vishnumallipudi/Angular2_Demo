import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { IEmployee } from '../employee/employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()



export class EmployeeService {
    constructor(private _http: Http) {  }

    getEmployees():Observable<IEmployee[]> {

        return this._http.get("http://localhost:56646/api/employees")
            .map((respo: Response) => <IEmployee[]>respo.json());

    }

}