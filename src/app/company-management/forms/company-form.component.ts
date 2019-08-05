import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';
@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})


export class CompanyFormComponent implements OnInit {

  company = new Company(0,"","","",false,"");
  existed = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) {
        return;
      };
      this.companyService.getCompany(p['id']).subscribe(h => this.company = h);
      this.existed = true;
    });
  }

  navigateToCompanys() {
    this.router.navigate(['/companys']);
  }

  onCancel() {
    this.navigateToCompanys();
  }
  
  onSubmit() {
      if(this.existed){
        this.companyService.updateEmployee(this.company).subscribe(c => this.navigateToCompanys());
      }else{
        this.companyService.addEmployee(this.company).subscribe(c => this.navigateToCompanys());
      }
  }

  onDelete() {
    this.companyService.setEmployeeStatus(this.company.id, true).subscribe(c => this.company.isDeleted = true);
  } 

  onUndelete() {
    this.companyService.setEmployeeStatus(this.company.id, false).subscribe(c => this.company.isDeleted = false);
  }

  onPurge() {
    this.companyService.deleteEmployee(this.company.id).subscribe(c => this.navigateToCompanys());
  }
}
