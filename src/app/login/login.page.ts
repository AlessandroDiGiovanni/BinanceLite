import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  AuthServiceService,
  SignUpFormInterface,
  LoginFormInterface,
} from '../providers/auth-service.service';
import { ToastController } from '@ionic/angular';

/* npm i @ionic/storage-angular*/

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  activatelogin: boolean = false;
  logged: boolean;
  SignupForm: FormGroup;
  LoginForm: FormGroup;
  check: boolean = false;
  resultS = <Response>{};
  resultL = <Response>{};

  constructor(
    private router: Router,
    private storage: Storage,
    public formBuilder: FormBuilder,
    public service: AuthServiceService,
    public toastController: ToastController
  ) {
    this.SignupForm = this.formBuilder.group({
      name: [, [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      os: ['', [Validators.required, Validators.minLength(2)]],
    });
    this.LoginForm = this.formBuilder.group({
      email: [, [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  async ngOnInit() {
    await this.storage.create();
    this.GetValue();
  }

  async SignUp() {
    const Sform: SignUpFormInterface = this.SignupForm.value;
    try {
      this.resultS = await this.service.SignUp(Sform);
      console.log(this.resultS);
      const toast = await this.toastController.create({
        message: 'We have send you a confirmation email!',
        duration: 2000,
      });
      toast.present();
      this.activatelogin = true;
    } catch {
      console.log(this.resultS);
      const toast = await this.toastController.create({
        message: 'Error: cannot send data. Please try again later',
        duration: 2000,
      });
      toast.present();
    }
  }

  async Login() {
    const Lform: LoginFormInterface = this.LoginForm.value;
    try {
      this.resultL = await this.service.LogIn(Lform);
      console.log(this.resultL);
      this.storage.set('email', Lform.email);
      const toast = await this.toastController.create({
        message: 'Welcome ' + Lform.email + '!',
        duration: 2000,
      });
      toast.present();

      this.SetValue(true);
    } catch {
      console.log(this.resultL);
      const toast = await this.toastController.create({
        message: 'Error: cannot send data. Please try again later',
        duration: 2000,
      });
      toast.present();
    }
  }

  async SetValue(value: boolean) {
    await this.storage.set('logged', value);
    this.ngOnInit();
  }

  async GetValue() {
    this.logged = await this.storage.get('logged');
    this.Check();
  }

  async Check() {
    if (this.logged == true) {
      await this.router.navigate(['tabs/tab1']);
      console.log('logged');
    } else {
      this.check = true;
      console.log('starting authentication');
    }
  }
}
