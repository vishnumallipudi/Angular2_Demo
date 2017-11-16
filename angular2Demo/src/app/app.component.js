"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageHeader = "Employee details";
        this.subHeader = null;
        this.firstName = "Vishnu";
        this.lastName = "Mallipudi";
    }
    AppComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div>\n                    <h3>{{'You page Header is :'+pageHeader}}</h3>\n                    <h3>{{pageHeader}}</h3>\n                    <h3>{{10+20+30}}</h3>\n                    <h3>{{subHeader?subHeader:'No subHeader'}}</h3>\n                    <h3>{{getFullName()}}</h3>\n                    <my-employee>employee dey=tials omes hreer</my-employee>\n                </div>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map