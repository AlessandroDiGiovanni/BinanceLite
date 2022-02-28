import { Component, OnInit } from '@angular/core';
import {
  CryptoValueService,
  RootObject,
} from '../providers/crypto-value.service';

@Component({
  selector: 'app-buy-crypto',
  templateUrl: './buy-crypto.page.html',
  styleUrls: ['./buy-crypto.page.scss'],
})
export class BuyCryptoPage implements OnInit {
  crypto: RootObject[];
  constructor(public api: CryptoValueService) {}

  async ngOnInit() {
    const data: RootObject[] = await this.api.getCrypto();
    this.crypto = data;
  }
}
