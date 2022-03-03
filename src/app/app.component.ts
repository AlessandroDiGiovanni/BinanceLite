import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private storage: Storage,
    private router: Router,
    private menu: MenuController
  ) {}

  closeMenu() {
    this.menu.close('first');
  }
  async Logout() {
    await this.storage.set('tutorial', false);
    await this.storage.set('logged', false);
    this.router.navigate(['/tutorial']);
  }

  async ngOnInit() {
    await this.storage.create();
    await this.router.navigate([
      (await this.storage.get('tutorial')) ? '/login' : '/tutorial',
    ]);
  }
}
