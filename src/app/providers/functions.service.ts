import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SheetModalPage } from '../sheet-modal/sheet-modal.page';


@Injectable({
  providedIn: 'root'
})

export class FunctionsService {

  constructor(private modalCtrl: ModalController) { }

  presentModel;

  async OpenModel() {
    this.presentModel = await this.modalCtrl.create({
      component: SheetModalPage,
      initialBreakpoint: 0.4,
      showBackdrop: true,
      mode: "ios",
      cssClass: 'change-address-shipping-modal'
    });


    return await this.presentModel.present();

  }

  async dismissModal() {
    if (this.presentModel) {
      this.modalCtrl.dismiss().then(() => {
        this.presentModel = null;

      });
    } return await this.presentModel
  }
}
