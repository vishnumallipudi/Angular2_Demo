"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
        this.exmodel = "Tom";
        this.firstName = "Vishnu";
        this.lastName = "Mallipudi";
        this.gender = "Male";
        this.age = 24;
        this.showDetails = true;
    }
    EmployeeComponent.prototype.onClick = function (event) {
        this.showDetails = !this.showDetails;
        console.log(this.showDetails);
        console.log(event.target);
    };
    EmployeeComponent.prototype.modelClick = function (e) {
        this.exmodel = e.target.value;
        console.log(this.exmodel);
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'my-employee',
            templateUrl: 'app/employee/employee.component.html'
        })
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map