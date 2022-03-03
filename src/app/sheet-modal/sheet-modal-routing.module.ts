import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyCryptoPage } from '../buy-crypto/buy-crypto.page';
import { SellCryptoPage } from '../sell-crypto/sell-crypto.page';

import { SheetModalPage } from './sheet-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SheetModalPage
  },
  {
    path: '/buy-crypto',
    component: BuyCryptoPage
  },
  {
    path: '/sell-crypto',
    component: SellCryptoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SheetModalPageRoutingModule {}
