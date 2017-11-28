import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<div>
                    enter text here: <input type='text' [(ngModel)]='userText'>
                   <br/> 
                   <br/> <list-employee>employee dey=tials omes hreer</list-employee>
                </div>`
})
export class AppComponent {
    userText: string = "vishnu";

 }