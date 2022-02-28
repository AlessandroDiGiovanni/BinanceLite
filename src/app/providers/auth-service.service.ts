import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface SignUpFormInterface {
  name: string;
  surname: string;
  email: string;
  password: string;
  os: string;
}

export interface LoginFormInterface {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {
    this.SignUp;
  }

  config = {
    headers: {
      'Content-Type': 'application/json',
      authorization:
        'Basic d2ViLXN0YWdlLmVhdHNyZWFkeS5jb206WTVTMEpWdDV4WGFCdDhZaA==',
    },
  };

  SignUp = (form: SignUpFormInterface) => {
    return this.http
      .post<Response>(
        'https://api-stage.eatsready.com/v2/auth/signup',
        form,
        this.config
      )
      .toPromise();
  };

  LogIn = (form: LoginFormInterface) => {
    return this.http
      .post<Response>(
        'https://api-stage.eatsready.com/v2/auth/login',
        form,
        this.config
      )
      .toPromise();
  };
}
