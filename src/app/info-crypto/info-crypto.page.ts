import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoValueService, RootObject } from '../providers/crypto-value.service';

@Component({
  selector: 'app-info-crypto',
  templateUrl: './info-crypto.page.html',
  styleUrls: ['./info-crypto.page.scss'],
})
export class InfoCryptoPage implements OnInit {
  sub: any;
  value: string;
  crypto: RootObject;

  constructor(private route: ActivatedRoute, public api: CryptoValueService) {}

  async ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.value = params['name'];
    });

    const data: RootObject = (await this.api.getCrypto()).find(
      (item) => item.name == this.value
    );
    this.crypto = data;
  }
}
