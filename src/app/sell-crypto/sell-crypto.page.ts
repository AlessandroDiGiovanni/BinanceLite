import { Component, OnInit } from '@angular/core';
import { CryptoValueService } from '../providers/crypto-value.service';

@Component({
  selector: 'app-sell-crypto',
  templateUrl: './sell-crypto.page.html',
  styleUrls: ['./sell-crypto.page.scss'],
})
export class SellCryptoPage implements OnInit {

  crypto ;

  constructor(public api: CryptoValueService) {}

  async ngOnInit() {
    
    const data = (await this.api.getCrypto());
    this.crypto = data;
    
  }


}
