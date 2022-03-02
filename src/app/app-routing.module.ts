import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tutorial',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sheet-modal',
    loadChildren: () => import('./sheet-modal/sheet-modal.module').then(m => m.SheetModalPageModule)
  },
  {
    path: 'buy-crypto',
    loadChildren: () => import('./buy-crypto/buy-crypto.module').then(m => m.BuyCryptoPageModule)
  },
  {
    path: 'sell-crypto',
    loadChildren: () => import('./sell-crypto/sell-crypto.module').then(m => m.SellCryptoPageModule)
  },
  {
    path: 'convert-crypto',
    loadChildren: () => import('./convert-crypto/convert-crypto.module').then(m => m.ConvertCryptoPageModule)
  },
  {
    path: 'buy-crypto/buy/:symbol',
    loadChildren: () => import('./buy/buy.module').then(m => m.BuyPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'search/info-crypto/:name',
    loadChildren: () => import('./info-crypto/info-crypto.module').then(m => m.InfoCryptoPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'sell-crypto/sell/:symbol',
    loadChildren: () => import('./sell/sell.module').then( m => m.SellPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
