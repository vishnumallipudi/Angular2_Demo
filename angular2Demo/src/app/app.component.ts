import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<div>
                    <h3>{{'You page Header is :'+pageHeader}}</h3>
                    <h3>{{pageHeader}}</h3>
                    <h3>{{10+20+30}}</h3>
                    <h3>{{subHeader?subHeader:'No subHeader'}}</h3>
                    <h3>{{getFullName()}}</h3>
                    <my-employee>employee dey=tials omes hreer</my-employee>
                </div>`
})
export class AppComponent {
    pageHeader: string = "Employee details";
    subHeader: string = null;
    firstName: string = "Vishnu";
    lastName: string = "Mallipudi";
    getFullName(): any {
        return this.firstName + ' ' + this.lastName;
    }
} 