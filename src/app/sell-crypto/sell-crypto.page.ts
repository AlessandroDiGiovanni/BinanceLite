import { Component, OnInit } from '@angular/core';
import { CryptoValueService, RootObject } from '../providers/crypto-value.service';

@Component({
  selector: 'app-sell-crypto',
  templateUrl: './sell-crypto.page.html',
  styleUrls: ['./sell-crypto.page.scss'],
})
export class SellCryptoPage implements OnInit {

  crypto: RootObject[];
  constructor(public api: CryptoValueService) { }

  async ngOnInit() {
    const data: RootObject[] = (await this.api.getCrypto());
    this.crypto = data;
  }
}
