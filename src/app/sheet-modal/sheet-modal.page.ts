import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../providers/functions.service';


@Component({
  selector: 'app-sheet-modal',
  templateUrl: './sheet-modal.page.html',
  styleUrls: ['./sheet-modal.page.scss'],
})
export class SheetModalPage  {

  constructor (private service: FunctionsService){}
  
  close(){
    this.service.dismissModal()
  }

}
