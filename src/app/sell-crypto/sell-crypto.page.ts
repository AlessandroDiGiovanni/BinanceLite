import { Component, OnInit } from '@angular/core';
import {
  CryptoValueService,
  MyCripto,
} from '../providers/crypto-value.service';

@Component({
  selector: 'app-sell-crypto',
  templateUrl: './sell-crypto.page.html',
  styleUrls: ['./sell-crypto.page.scss'],
})
export class SellCryptoPage implements OnInit {
  constructor(public api: CryptoValueService) {}

  async ngOnInit() {}
}
