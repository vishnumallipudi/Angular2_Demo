import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'empTitlePipe' })

export class EmployeeTitlePipe implements PipeTransform {
    transform(value: string, gender: string): string {
        if (gender.toLowerCase() == "male")
            return "Mr." + value;
        else
            console.log(value + " Gender: " + gender);
            return "Miss." + value;
    }

}