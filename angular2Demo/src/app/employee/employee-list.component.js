"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent() {
        this.employees = [
            { Id: 1, FirstName: 'vishnu', LastName: 'Mallipudi', Dept: 'IT', Salary: '555.3', Dob: '6/15/1994' },
            { Id: 2, FirstName: 'Venkatesh', LastName: 'Sadineni', Dept: 'IT', Salary: '555.3', Dob: '6/15/1994' },
            { Id: 3, FirstName: 'Saibaba', LastName: 'Vinnakota', Dept: 'IT', Salary: '895.3333', Dob: '6/15/1994' },
            { Id: 4, FirstName: 'Naveen', LastName: 'Tanakala', Dept: 'IT', Salary: '143', Dob: '6/15/1994' },
            { Id: 5, FirstName: 'Naveen2', LastName: 'Tanakala', Dept: 'IT', Salary: '948.36', Dob: '6/15/1994' },
        ];
    }
    EmployeeListComponent.prototype.getEmployees = function () {
        this.employees = [
            { Id: 1, FirstName: 'vishnu', LastName: 'Mallipudi', Dept: 'IT', Salary: '555.3', Dob: '6/15/1994' },
            { Id: 2, FirstName: 'Venkatesh', LastName: 'Sadineni', Dept: 'IT', Salary: '555.3', Dob: '6/15/1994' },
            { Id: 3, FirstName: 'Saibaba', LastName: 'Vinnakota', Dept: 'IT', Salary: '895.3333', Dob: '6/15/1994' },
            { Id: 4, FirstName: 'Naveen', LastName: 'Tanakala', Dept: 'IT', Salary: '143', Dob: '6/15/1994' },
            { Id: 5, FirstName: 'Naveen2', LastName: 'Tanakala', Dept: 'IT', Salary: '948.363', Dob: '6/15/1994' },
        ];
    };
    EmployeeListComponent.prototype.trackByEmpId = function (index, emp) {
        return emp.Id;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employee-list.component.html',
            styleUrls: ['app/employee/employee-list.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map