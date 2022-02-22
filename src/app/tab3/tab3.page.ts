import { Component, ViewChild } from '@angular/core';
import { CryptoValueService, RootObject } from '../providers/crypto-value.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  visibility = true;
  visibility1 = true;
  crypto: RootObject[];

  nameCrypto = [];
  frollo = ['frollo1', 'frollo2']

  constructor(public api: CryptoValueService) { }

  async ngOnInit() {

    const data: RootObject[] = await this.api.getCrypto();
    this.crypto = data;
    this.nameCrypto = await this.crypto.map((item) => item.symbol)
    console.log(this.nameCrypto)
    this.createBarChart();
  }

  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;

  createBarChart() {
    console.log(this.nameCrypto);
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.nameCrypto,
        datasets: [{
          label: '# of Votes',
          data: [50, 26, 80, 65],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }
}

