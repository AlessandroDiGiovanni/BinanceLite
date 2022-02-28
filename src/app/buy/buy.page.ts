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
  crypto:RootObject;
  constructor(private route: ActivatedRoute, public api: CryptoValueService) { }
  

  async ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.value = params['symbol'];
    })

    const data: RootObject = (await this.api.getCrypto()).find(
      (item) => item.symbol == this.value
    );
    this.crypto = data;
  }

  }


