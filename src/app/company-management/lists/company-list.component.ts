import { Component, OnInit } from '@angular/core';
import { CompanyListItem } from '../models/company-list-item';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companys: CompanyListItem[];
  currentManagerId: number = -1;
  countPress: number = 0;
  managerId:number = 0;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getConponys();
  }

  getConponys() {
    this.companyService.getComponys().subscribe(h => {
      this.companys = h;
      console.log(h);
    });
  }

  onDelete(companyId: number) {
    var compony = this.companys.find(h => h.id == companyId);
    this.companyService.setEmployeeStatus(companyId, true).subscribe(c => compony.isDeleted = true);
  }

  onVievOrders(companyId: number) {
    localStorage.setItem('companyId', companyId.toString());
  }
}
