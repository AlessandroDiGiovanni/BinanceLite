import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvertCryptoPage } from './convert-crypto.page';

const routes: Routes = [
  {
    path: '',
    component: ConvertCryptoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertCryptoPageRoutingModule {}
