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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http) {
        this._http = _http;
    }
    EmployeeService.prototype.getEmployees = function () {
        return [
            {
                Id: 101, FirstName: 'Tom', Gender: 'Male', Salary: '5500', Dob: '6/25/1988', Dept: 'IT', LastName: 'Tom'
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
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map