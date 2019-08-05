import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeListItem } from '../models/employee-list-item';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private url = environment.apiUrl + 'api/employees/';
  private urlManager = environment.apiUrl + 'api/managers/';

  private urlEmployeeController = 'http://localhost:56952/api/employees';

  constructor(private http: HttpClient) { }

  getManagerEmployees(managaerId: number): Observable<Array<EmployeeListItem>>{
    return this.http.get<Array<EmployeeListItem>>(`${this.urlManager}${managaerId}`);
  }

  getEmployees(): Observable<Array<EmployeeListItem>> {
    return this.http.get<Array<EmployeeListItem>>(this.url);
  }

  getEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}${employeeId}`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.url}`, employee);
  }

  updateEmployee(employee: Employee): Observable<Object> {
    return this.http.put(`${this.url}${employee.id}`, employee);
  }

  deleteEmployee(employeeId: number): Observable<Object> {
    return this.http.delete(`${this.url}${employeeId}`);
  }

  setEmployeeStatus(employeeId: number, deletedStatus: boolean): Observable<Object> {
    return this.http.put(`${this.url}${employeeId}/status/${deletedStatus}`, Object);
  }
}
