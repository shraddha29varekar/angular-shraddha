import { EmployeeService } from './../employee.service';
import { Employee } from './../Employee';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  

  searchText :string;
  employees: Employee[];
 


  constructor(private employeeService:EmployeeService) { 
    
  }

  ngOnInit() {
    this.getEmployees();
  }
   
  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => {
     this.employees = employees
    });
  }
 
}
