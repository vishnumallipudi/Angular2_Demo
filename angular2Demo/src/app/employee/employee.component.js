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
        this.applyBold = true;
        this.applyItalics = true;
        this.applyColor = true;
    }
    EmployeeComponent.prototype.addClasses = function () {
        var allClasses = {
            boldClass: this.applyBold,
            italicClass: this.applyItalics,
            colorClass: this.applyColor
        };
        return allClasses;
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'my-employee',
            template: "\n<button [ngClass]='addClasses()'>Click Here</button>\n<button [class.boldClass]='classvalue'>Click Here</button>"
        })
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map