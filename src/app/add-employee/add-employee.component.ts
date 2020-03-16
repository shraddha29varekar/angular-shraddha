import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent implements OnInit {
 
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit() {
  }

  submit(employee):void{
    this.employeeService.addEmployee(employee as Employee).subscribe(employee => {
      this.employees.push(employee);
     });
     this.router.navigate(['/employees']);
  }

}
