import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [MatSidenavModule],
})
export class CampaignsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
/*ngOnInit(): void {
  throw new Error('Method not implemented.');
}
setFilter(arg0: string) {
throw new Error('Method not implemented.');
}*/

}
