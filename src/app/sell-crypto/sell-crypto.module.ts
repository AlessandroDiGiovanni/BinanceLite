import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellCryptoPageRoutingModule } from './sell-crypto-routing.module';

import { SellCryptoPage } from './sell-crypto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellCryptoPageRoutingModule
  ],
  declarations: [SellCryptoPage]
})
export class SellCryptoPageModule {}
