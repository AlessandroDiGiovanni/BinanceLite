import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoCryptoPage } from './info-crypto.page';

const routes: Routes = [
  {
    path: '',
    component: InfoCryptoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoCryptoPageRoutingModule {}
