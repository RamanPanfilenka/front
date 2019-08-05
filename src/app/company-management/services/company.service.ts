import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { CompanyListItem } from '../models/company-list-item';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  private url = environment.apiUrl + 'api/companys/';

  constructor(private http: HttpClient) { }

  getComponys(): Observable<Array<CompanyListItem>> {
    return this.http.get<Array<CompanyListItem>>(this.url);
  }

  getCompany(companyId: number): Observable<Company> {
    return this.http.get<Company>(`${this.url}${companyId}`);
  }

  addEmployee(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.url}`, company);
  }

  updateEmployee(company: Company): Observable<Object> {
    return this.http.put(`${this.url}${company.id}`, company);
  }

  deleteEmployee(companyId: number): Observable<Object> {
    return this.http.delete(`${this.url}${companyId}`);
  }

  setEmployeeStatus(companyId: number, deletedStatus: boolean): Observable<Object> {
    return this.http.put(`${this.url}${companyId}/status/${deletedStatus}`, Object);
  }
}
