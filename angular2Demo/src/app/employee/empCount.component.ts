import {Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'emp-count',
    
    styleUrls: ['app/employee/empCount.component.css'],
    templateUrl: 'app/employee/empCount.component.html'
    

})

export class empCountComponent {
    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number = 2;

    
    // Holds the selected value of the radio button
    selectedRadiobtnValue: string = 'All';


    // The Output decorator makes the property an Output property
    // EventEmitter class is used to create the custom event
    // When the radio button selection changes, the selected
    // radio button value which is a string gets passed to the
    // event handler method. Hence, the event payload is string.
    @Output()
    countRadiobtnSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    // This method raises the custom event. We will bind this
    // method to the change event of all the 3 radio buttons
    onRadiobtnChange() {
        this.countRadiobtnSelectionChanged.emit(this.selectedRadiobtnValue)
    }

}