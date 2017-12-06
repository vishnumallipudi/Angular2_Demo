export interface IEmployee {
    code: number;
    name: string;
    gender: string;
    annualSalary: string;
    dateOfBirth: string;
}

export class Employee implements IEmployee {
    constructor(public code: number, public name: string, public gender: string,
         public annualSalary: string, public dateOfBirth: string) { }



}