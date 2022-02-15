import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellCryptoPage } from './sell-crypto.page';

const routes: Routes = [
  {
    path: '',
    component: SellCryptoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellCryptoPageRoutingModule {}
