import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoValueService, RootObject } from '../providers/crypto-value.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {
  
  sub: any;
  value: string;
  crypto:RootObject[];
  valueusd:number[];
  img: string[];

  constructor(private route: ActivatedRoute, public api: CryptoValueService) { }
  

  async ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.value = params['symbol'];
    })

    const data:RootObject[] = (await this.api.getCrypto()).filter(item =>item.symbol==this.value);
    this.crypto = data;
    this.valueusd = this.crypto.map(item => item.market_data.current_price.usd);
    this.img = this.crypto.map(item => item.image.thumb)
    console.log(this.img)
    console.log(this.valueusd)
    console.log(this.value)

  }

}
