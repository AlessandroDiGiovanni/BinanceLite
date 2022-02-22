import { Component, OnInit } from '@angular/core';
import { CryptoValueService, RootObject } from '../providers/crypto-value.service';

@Component({
  selector: 'app-convert-crypto',
  templateUrl: './convert-crypto.page.html',
  styleUrls: ['./convert-crypto.page.scss'],
})
export class ConvertCryptoPage implements OnInit {

  crypto:RootObject[];
  visibility = true;

  constructor(public api: CryptoValueService) {}

  async ngOnInit() {  
    const data:RootObject[] = (await this.api.getCrypto());
    this.crypto = data; 
  }
}
