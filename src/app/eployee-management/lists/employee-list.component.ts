import { Component, OnInit } from '@angular/core';
import { EmployeeListItem } from '../models/employee-list-item';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: EmployeeListItem[];
  currentManagerId: number = -1;
  countPress: number = 0;
  managerId:number = 0;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getHives();
    localStorage.setItem('managerId', this.managerId.toString());
  }

  getHives() {
    this.employeeService.getEmployees().subscribe(h => this.employees = h);
  }

  onDelete(employeeId: number) {
    var employee = this.employees.find(h => h.id == employeeId);
    this.employeeService.setEmployeeStatus(employeeId, true).subscribe(c => employee.isDeleted = true);
  }

  onVievManagerEmployee(employeeId: number) {
    var employee = this.employees.find(h => h.id == employeeId);
    this.employeeService.getManagerEmployees(employee.id).subscribe(c => {
      this.employees = c;
      this.currentManagerId = employee.managerId;
      this.managerId = employee.id;
      this.countPress++;
      localStorage.setItem('managerId', this.managerId.toString());
    });
  }

  onBack(){
    if(this.currentManagerId == 0)
    {
      this.employeeService.getEmployees().subscribe(h =>{
        this.employees = h;
        this.currentManagerId = -1;
        this.managerId = 0;
        localStorage.setItem('managerId', this.managerId.toString());
        });
    }
    else{
      this.employeeService.getManagerEmployees(this.currentManagerId).subscribe(h => {
        this.employees = h;
        this.employeeService.getEmployee(h[0].managerId).subscribe(g => {
          this.currentManagerId = g.managerId;
          this.managerId = g.id;
          localStorage.setItem('managerId', this.managerId.toString());
        })
      });
    }
    this.countPress--;
  }
}
