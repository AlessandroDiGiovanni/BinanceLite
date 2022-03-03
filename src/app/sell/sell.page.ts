import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import {
  CryptoValueService,
  MyCripto,
  RootObject,
} from '../providers/crypto-value.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.page.html',
  styleUrls: ['./sell.page.scss'],
})
export class SellPage implements OnInit {
  sub: any;
  symbolCrypto: string;
  index: number;
  currentvalue: number = 0;

  market_dataUSD: number;
  currentcrypto: MyCripto;

  constructor(
    private route: ActivatedRoute,
    public api: CryptoValueService,
    public toastController: ToastController,
    public router: Router
  ) {}

  async ngOnInit() {

    
    this.sub = this.route.params.subscribe((params) => {
      this.symbolCrypto = params['symbol'];
    });

    this.index = this.api.Cryptos.findIndex(
      (item) => item.symbol == this.symbolCrypto
    );


    const data: RootObject[] = await this.api.getCrypto();
    this.market_dataUSD = data.find(
      (item) => item.symbol == this.symbolCrypto
    ).market_data.current_price.usd;

    this.currentcrypto = this.api.Cryptos.find(
      (item) => item.symbol == this.symbolCrypto
    );
    
  }

  async sellCrypto() {
    this.api.Cryptos[this.index].value =
      this.api.Cryptos[this.index].value - this.currentvalue;

    this.api.Cryptos[this.index].valueinCrypto =
      this.api.Cryptos[this.index].value / this.market_dataUSD;
    

      if (this.currentcrypto.value >= 0 ){ const toast = await this.toastController.create({
      color: 'danger',
      message:
        'You have made the sale of ' +
        this.currentvalue +
        '$. Now you have ' +
        this.currentcrypto.valueinCrypto +
        ' ' +
        this.currentcrypto.symbol,
      duration: 3000,
    });
    toast.present();}
    else{
      const toast = await this.toastController.create({
        color: 'danger',
        message:
          'You have made the sale of' +
          this.currentvalue +
          '$. Now you have 0' +
          ' ' +
          this.currentcrypto.symbol,
        duration: 3000,
      });
      toast.present();}

      if (this.currentcrypto.value <= 0) {
        this.api.Cryptos.splice(this.index,1);
        this.router.navigate(['/sell-crypto']);
      }
    }
  }
   
  

