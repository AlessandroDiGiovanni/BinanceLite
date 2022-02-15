import { Component } from '@angular/core';
import { CryptoValueService, RootObject } from '../providers/crypto-value.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  crypto:RootObject[];

  constructor(public api: CryptoValueService) {}

  async ngOnInit() {
    
    const data:RootObject[] = (await this.api.getCrypto());
    this.crypto = data;
    
  }
}

