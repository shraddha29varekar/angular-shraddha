import { MainPageComponent } from './main-page/main-page.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from './in-memory-data.service';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Employee } from './Employee';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { SearchByNamePipe } from './search-by-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    MainPageComponent,
    EmployeesListComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
    SearchByNamePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'employees',component:EmployeesListComponent},
      {path:'addemployee',component:AddEmployeeComponent},
      {path:'editEmployee/:id',component:EmployeeEditComponent},
      {path:'details/:id',component:EmployeeDetailsComponent},
      {path:'deleteEmployee/:id',component:EmployeeDeleteComponent},
      {path:'**',component:MainPageComponent}
    ]),
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
