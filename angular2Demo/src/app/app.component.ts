import {Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<h1>Hello venkatesh-{{name}}</h1>`
})
export class AppComponent {
    name: string = "Vishnu";
}