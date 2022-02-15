import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SheetModalPageRoutingModule } from './sheet-modal-routing.module';

import { SheetModalPage } from './sheet-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SheetModalPageRoutingModule
  ],
  declarations: [SheetModalPage]
})
export class SheetModalPageModule {}
