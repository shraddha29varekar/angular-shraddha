import { EmployeeService } from './../employee.service';
import { Employee } from './../Employee';
import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html'
  
})
export class EmployeeEditComponent implements OnInit {
 
  @Input() employee: Employee;
 
  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }
  
  save(): void {
    this.employeeService.updateEmployee(this.employee)
      .subscribe(() => this.location.back() );
    
  }
}


 



 
