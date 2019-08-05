import * as Some from '../js/SendData';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { FileService } from '../services/file.service';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})


export class EmployeeFormComponent implements OnInit {

  employee = new Employee(0, "", "", "", false, "",0);
  existed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private fileService: FileService,
  ) { }

  ngOnInit() {
    delete require.cache[require.resolve('../js/SendData.js')]
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) {
        localStorage.setItem('exist', 'false');
        return;
      };
      localStorage.setItem('exist', 'true');
      this.employeeService.getEmployee(p['id']).subscribe(h => this.employee = h);
      this.existed = true;
      this.fileService.getFile(p['id']).subscribe(h => {
        document.getElementById('avatar-img').setAttribute('src', h);
        console.log(h);
      });
    });
    require('../js/SendData.js');
    
  }

  navigateToEmployees() {
    this.router.navigate(['/employees']);
  }

  onCancel() {
    this.navigateToEmployees();
  }
  
  onSubmit() {
      if(this.existed){
        this.employeeService.updateEmployee(this.employee).subscribe(c => this.navigateToEmployees());
      }else{
        this.employeeService.addEmployee(this.employee).subscribe(c => this.navigateToEmployees());
      }
  }

  onDelete() {
    this.employeeService.setEmployeeStatus(this.employee.id, true).subscribe(c => this.employee.isDeleted = true);
  } 

  onUndelete() {
    this.employeeService.setEmployeeStatus(this.employee.id, false).subscribe(c => this.employee.isDeleted = false);
  }

  onPurge() {
    this.employeeService.deleteEmployee(this.employee.id).subscribe(c => this.navigateToEmployees());
  }
}
