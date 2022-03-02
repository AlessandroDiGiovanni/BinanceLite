import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CryptoValueService,
  RootObject,
  MyCripto,
} from '../providers/crypto-value.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {
  sub: any;
  value: string;
  crypto: RootObject;

  currentvalue: number = 0;

  constructor(
    private route: ActivatedRoute,
    public api: CryptoValueService,

    public toastController: ToastController
  ) {}

  async ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.value = params['symbol'];
    });

    const data: RootObject = (await this.api.getCrypto()).find(
      (item) => item.symbol == this.value
    );
    this.crypto = data;
  }

  async buyCrypto() {
    const currentCrypto: MyCripto = {
      name: this.crypto.name,
      value: this.currentvalue,
      valueinCrypto:
        this.currentvalue / this.crypto.market_data.current_price.usd,
      symbol: this.value,
      image: this.crypto.image.thumb,
    };

    let check = this.api.Cryptos.find((item) => item.name == this.crypto.name);
    if (!check) {
      this.api.Cryptos.push(currentCrypto);
    } else {
      let i: number = this.api.Cryptos.findIndex(
        (item) => item.name == this.crypto.name
      );
      this.api.Cryptos[i].value =
        +this.api.Cryptos[i].value + +this.currentvalue;
      this.api.Cryptos[i].valueinCrypto =
        this.api.Cryptos[i].value / this.crypto.market_data.current_price.usd;
    }
    const toast = await this.toastController.create({
      color: 'success',
      message:
        "Hai effettuato l'acquisto di " +
        this.api.Cryptos.find((item) => item.name == this.crypto.name)
          .valueinCrypto +
        ' ' +
        currentCrypto.name +
        ' per un totale di ' +
        this.api.Cryptos.find((item) => item.name == this.crypto.name).value +
        ' $',
      duration: 2000,
    });
    toast.present();

    check: null;
  }
}
