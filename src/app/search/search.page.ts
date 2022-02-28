import { Component, OnInit } from '@angular/core';
import { CryptoValueService, RootObject } from '../providers/crypto-value.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  crypto: RootObject[];

  constructor(public api: CryptoValueService) {}

  async ngOnInit() {
    const data: RootObject[] = await this.api.getCrypto();
    this.crypto = data;
  }
}
