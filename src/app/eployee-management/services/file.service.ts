import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { FileModel } from '../models/fileModel';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  
  private url = environment.apiUrl + 'api/files/';

  constructor(private http: HttpClient) { }

  getFile(employeeId): Observable<string> {
    return this.http.get<string>(`${this.url}${employeeId}`);
  }

  deleteEmployee(employeeId: number): Observable<Object> {
    return this.http.delete(`${this.url}${employeeId}`);
  }

}
