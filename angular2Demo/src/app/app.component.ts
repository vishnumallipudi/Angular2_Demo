import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<div>
                    <h3><input id="mytextbox" type="text" value="Vishnu"/></h3>
                    <my-employee>employee dey=tials omes hreer</my-employee>
                </div>`
})
export class AppComponent {
    pageHeader: string = "Employee details";
    subHeader: string = null;
    firstName: string = "Vishnu";
    lastName: string = "Mallipudi";
    isDisabled: boolean = false;
    getFullName(): any {
        return this.firstName + ' ' + this.lastName;
    }
 }