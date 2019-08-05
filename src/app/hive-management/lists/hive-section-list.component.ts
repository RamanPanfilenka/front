import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HiveSectionListItem } from '../models/hive-section-list-item';
import { HiveService } from '../services/hive.service';
import { HiveSection } from '../models/hive-section';
import { HiveSectionService } from '../services/hive-section.service';

@Component({
  selector: 'app-hive-section-list',
  templateUrl: './hive-section-list.component.html',
  styleUrls: ['./hive-section-list.component.css']
})
export class HiveSectionListComponent implements OnInit {

  hiveSections: HiveSectionListItem[];

  constructor(private hiveSectionService: HiveSectionService) { }

  ngOnInit() {
    this.getHiveSections();
  }

  getHiveSections(){
    this.hiveSectionService.getHiveSections().subscribe(h => this.hiveSections = h);
  }
}
