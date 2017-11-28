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
var empCountComponent = /** @class */ (function () {
    function empCountComponent() {
        this.female = 2;
        // Holds the selected value of the radio button
        this.selectedRadiobtnValue = 'All';
        // The Output decorator makes the property an Output property
        // EventEmitter class is used to create the custom event
        // When the radio button selection changes, the selected
        // radio button value which is a string gets passed to the
        // event handler method. Hence, the event payload is string.
        this.countRadiobtnSelectionChanged = new core_1.EventEmitter();
    }
    // This method raises the custom event. We will bind this
    // method to the change event of all the 3 radio buttons
    empCountComponent.prototype.onRadiobtnChange = function () {
        this.countRadiobtnSelectionChanged.emit(this.selectedRadiobtnValue);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], empCountComponent.prototype, "all", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], empCountComponent.prototype, "male", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], empCountComponent.prototype, "female", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], empCountComponent.prototype, "countRadiobtnSelectionChanged", void 0);
    empCountComponent = __decorate([
        core_1.Component({
            selector: 'emp-count',
            styleUrls: ['app/employee/empCount.component.css'],
            templateUrl: 'app/employee/empCount.component.html'
        })
    ], empCountComponent);
    return empCountComponent;
}());
exports.empCountComponent = empCountComponent;
//# sourceMappingURL=empCount.component.js.map