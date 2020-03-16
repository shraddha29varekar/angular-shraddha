import { EmployeeService } from './../employee.service';
import { Employee } from './../Employee';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html'
})
export class EmployeeDetailsComponent implements OnInit {
  
  @Input() employee: Employee; 

  

  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location) {
   }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee= employee);
  }

  goBack(): void {
    this.location.back();
  }


}









