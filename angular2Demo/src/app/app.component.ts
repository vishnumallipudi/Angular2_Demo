import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<div>
                    <h1>{{pageHeader}}</h1>
                    <my-employee>employee dey=tials omes hreer</my-employee>
                </div>`
})
export class AppComponent {
    pageHeader: string = "Employee details";
} 