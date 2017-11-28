export interface IEmployee {
    Id: number;
    FirstName: string;
    LastName: string;
    Gender: string;
    Dept: string;
    Salary: string;
    Dob: Date;
}

export class Employee implements IEmployee {
    constructor(public Id: number, public FirstName: string, public LastName: string, public Gender: string,
        public Dept: string, public Salary: string, public Dob: Date) { }



}