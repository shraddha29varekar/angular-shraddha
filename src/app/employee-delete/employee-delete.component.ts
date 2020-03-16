import { EmployeeService } from './../employee.service';
import { Employee } from './../Employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html'  
})
export class EmployeeDeleteComponent implements OnInit {
  
  employees: Employee[];

  constructor(private employeeService: EmployeeService,private route: ActivatedRoute, private router:Router
    ) { }

  ngOnInit() {
    this.delete();
    setTimeout(() => {
      this.router.navigate(['/employees']);
  }, 1000); 
  }

  delete(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.deleteEmployee(id).subscribe(
       );
  }

}





  

  

