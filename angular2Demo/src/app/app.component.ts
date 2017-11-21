import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<div>
                    
                    <list-employee>employee dey=tials omes hreer</list-employee>
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