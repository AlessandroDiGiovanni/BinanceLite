import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyCryptoPage } from './buy-crypto.page';

const routes: Routes = [
  {
    path: '',
    component: BuyCryptoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyCryptoPageRoutingModule {}
