import { Component, OnInit } from '@angular/core';
import { CryptoValueService } from '../providers/crypto-value.service';

@Component({
  selector: 'app-buy-crypto',
  templateUrl: './buy-crypto.page.html',
  styleUrls: ['./buy-crypto.page.scss'],
})
export class BuyCryptoPage implements OnInit {

  crypto ;

  constructor(public api: CryptoValueService) {}

  async ngOnInit() {
    
    const data = (await this.api.getCrypto());
    this.crypto = data;
  
  }

}
