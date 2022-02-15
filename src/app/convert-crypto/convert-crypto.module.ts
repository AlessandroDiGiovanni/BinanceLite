import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertCryptoPageRoutingModule } from './convert-crypto-routing.module';

import { ConvertCryptoPage } from './convert-crypto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertCryptoPageRoutingModule
  ],
  declarations: [ConvertCryptoPage]
})
export class ConvertCryptoPageModule {}
