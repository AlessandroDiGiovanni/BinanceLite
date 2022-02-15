import { Component, OnInit } from '@angular/core';
import { CryptoValueService } from '../providers/crypto-value.service';

@Component({
  selector: 'app-convert-crypto',
  templateUrl: './convert-crypto.page.html',
  styleUrls: ['./convert-crypto.page.scss'],
})
export class ConvertCryptoPage implements OnInit {

  crypto ;

  constructor(public api: CryptoValueService) {}

  
   visibility = true;
  
  async ngOnInit() {
    
    const data = (await this.api.getCrypto());
    this.crypto = data;
    
  }

  
}
