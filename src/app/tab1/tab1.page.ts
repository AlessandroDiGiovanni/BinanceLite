import { Component, OnInit, ViewChild } from '@angular/core';
import {
  CryptoValueService,
  RootObject,
} from '../providers/crypto-value.service';
import { IonInfiniteScroll } from '@ionic/angular';

interface InfiniteScrollCustomEvent extends CustomEvent {
  target: HTMLIonInfiniteScrollElement;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  crypto: RootObject[];
  cryptoScroll: RootObject[];

  limit: number;

  constructor(public api: CryptoValueService) {}

  async ngOnInit() {
    const data: RootObject[] = await this.api.getCrypto();
    this.crypto = data;
    this.cryptoScroll = this.crypto.slice(0, (this.limit = 10));
  }

  async doRefresh(event) {
    this.cryptoScroll = [];
    const data: RootObject[] = await this.api.getCrypto();
    setTimeout(() => {
      this.crypto = data;
      this.cryptoScroll = this.crypto.slice(0, (this.limit = 10));
      event.target.complete();
    }, 700);
  }

  loadData(event) {
    setTimeout(() => {
      this.limit = this.limit + 10;
      this.cryptoScroll = this.crypto.slice(0, this.limit);
      event.target.complete();
      if (this.cryptoScroll.length == this.crypto.length) {
        event.target.disabled = true;
      }
    }, 1000);
  }
}
