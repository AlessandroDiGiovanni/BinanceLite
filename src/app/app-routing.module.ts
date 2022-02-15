import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sheet-modal',
    loadChildren: () => import('./sheet-modal/sheet-modal.module').then( m => m.SheetModalPageModule)
  },
  {
    path: 'buy-crypto',
    loadChildren: () => import('./buy-crypto/buy-crypto.module').then( m => m.BuyCryptoPageModule)
  },
  {
    path: 'sell-crypto',
    loadChildren: () => import('./sell-crypto/sell-crypto.module').then( m => m.SellCryptoPageModule)
  },
  {
    path: 'convert-crypto',
    loadChildren: () => import('./convert-crypto/convert-crypto.module').then( m => m.ConvertCryptoPageModule)
  },
  {
    path: 'buy-crypto/buy/:symbol',
    loadChildren: () => import('./buy/buy.module').then( m => m.BuyPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
