"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent() {
        this.employees = [
            { Id: 1, FirstName: 'vishnu', LastName: 'Mallipudi', Dept: 'IT' },
            { Id: 2, FirstName: 'Venkatesh', LastName: 'Sadineni', Dept: 'IT' },
            { Id: 3, FirstName: 'Saibaba', LastName: 'Vinnakota', Dept: 'IT' },
            { Id: 4, FirstName: 'Naveen', LastName: 'Tanakala', Dept: 'IT' },
        ];
    }
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employee/employee-list.component.html',
            styleUrls: ['app/employee/employee-list.component.css']
        })
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map