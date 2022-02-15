import { Component, ViewChild } from '@angular/core';
import { FunctionsService } from '../providers/functions.service'


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public service: FunctionsService) {
  }
  Open() {
    this.service.OpenModel();
  }
}