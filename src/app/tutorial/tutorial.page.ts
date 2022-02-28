import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage {

  constructor(private storage: Storage, private router: Router) { }

  async tutorialIsShowed() {
    await this.storage.set('tutorial', true);
    this.router.navigate(['/login']);
  }

}
