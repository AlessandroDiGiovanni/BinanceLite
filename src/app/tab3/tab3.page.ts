import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  CryptoValueService,
  RootObject,
  MyCripto,
} from '../providers/crypto-value.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  visibility = true;

  crypto: RootObject[];
  sum: number = 0;

  nameCrypto = [];
  valueCrypto = [];

  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  doughnutChart: any;
  colorArray: any;

  constructor(public api: CryptoValueService) {}

  async ngOnInit() {}

  ngAfterViewInit() {
    this.doughnutChartMethod();
  }

  ionViewWillEnter() {
    this.sum = this.api.Cryptos.map((item) => item.value).reduce(
      (accumulator, current) => +accumulator + +current,
      0
    );
    this.nameCrypto = this.api.Cryptos.map((item) => item.name);
    this.valueCrypto = this.api.Cryptos.map((item) => item.valueinCrypto);
    this.doughnutChart.destroy();
    this.doughnutChartMethod();
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.nameCrypto,
        datasets: [
          {
            label: '# of coins',
            data: this.valueCrypto,
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            hoverBackgroundColor: [
              '#FFCE56',
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#FF6384',
            ],
          },
        ],
      },
    });
  }
}
