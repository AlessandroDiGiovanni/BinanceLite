import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyCryptoPageRoutingModule } from './buy-crypto-routing.module';

import { BuyCryptoPage } from './buy-crypto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyCryptoPageRoutingModule
  ],
  declarations: [BuyCryptoPage]
})
export class BuyCryptoPageModule {}
