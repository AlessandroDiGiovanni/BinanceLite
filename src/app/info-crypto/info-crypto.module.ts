import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoCryptoPageRoutingModule } from './info-crypto-routing.module';

import { InfoCryptoPage } from './info-crypto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoCryptoPageRoutingModule
  ],
  declarations: [InfoCryptoPage]
})
export class InfoCryptoPageModule {}
