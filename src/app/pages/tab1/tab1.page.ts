import { Component } from '@angular/core';
import { DesiresService } from '../../services/desires.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public desiresService: DesiresService) {
    
  }

}
