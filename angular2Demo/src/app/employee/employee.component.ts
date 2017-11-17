import { Component } from '@angular/core'
@Component({
    selector: 'my-employee',
    template: `
<button [ngClass]='addClasses()'>Click Here</button>
<button [class.boldClass]='classvalue'>Click Here</button>`
})
export class EmployeeComponent {
    applyBold: boolean = true;
    applyItalics: boolean = true;
    applyColor: boolean = true;
    addClasses() {
        let allClasses={
            boldClass: this.applyBold,
            italicClass: this.applyItalics,
            colorClass: this.applyColor
        };
        return allClasses;
    }
}