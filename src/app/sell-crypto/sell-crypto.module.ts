import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellCryptoPageRoutingModule } from './sell-crypto-routing.module';

import { SellCryptoPage } from './sell-crypto.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellCryptoPageRoutingModule, Ng2SearchPipeModule
  ],
  declarations: [SellCryptoPage]
})
export class SellCryptoPageModule {}
