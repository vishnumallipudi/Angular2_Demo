import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { empCountComponent } from './employee/empCount.component';
//import { simpleComponent } from './others/simplemodel'
import { HttpModule } from '@angular/http';
//import { EmployeeService } from './employee/employee.service';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe, empCountComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
