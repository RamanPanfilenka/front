import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HiveSectionService } from '../services/hive-section.service';
import { HiveSection } from '../models/hive-section';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-hive-section-form',
  templateUrl: './hive-section-form.component.html',
  styleUrls: ['./hive-section-form.component.css']
})
export class HiveSectionFormComponent implements OnInit {

  hiveSection = new HiveSection(0, "", "", false);
  existed = false;
  previousUrl: string;
  currentsUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hiveSectionService: HiveSectionService,
  ) { 
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id'] === undefined) return;
      this.hiveSectionService.getHiveSection(p['id']).subscribe(h => this.hiveSection = h);
      this.existed = true;
    });
  }

  navigateToHives(){
    this.router.navigate(['/hives']);
  }

  onCancel(){
    this.navigateToHives();
  }

  onSubmit()
  {
    if(this.existed){
      this.hiveSectionService.updateHiveSection(this.hiveSection).subscribe(p => this.navigateToHives());
    }
    else{
      this.hiveSectionService.addHiveSection(this.hiveSection).subscribe(p => this.navigateToHives());
    }
  }

  onDelete(){
    this.hiveSectionService.setHiveSectionStatus(this.hiveSection.id, true).subscribe(p => this.hiveSection.isDeleted = true);
  }

  onUndelete(){
    this.hiveSectionService.setHiveSectionStatus(this.hiveSection.id, false).subscribe(p => this.hiveSection.isDeleted = false);
  }

  onPurge(){
    this.hiveSectionService.deleteHiveSection(this.hiveSection.id).subscribe(p => this.navigateToHives());
  }
}
