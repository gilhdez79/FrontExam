import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { UserManager, User, WebStorageStateStore } from 'oidc-client';
import {    apiSettings } from './appsettins';


@Injectable()
export class AuthService {
  private _userManager: UserManager;
  private _user!: User;


  constructor(private httpClient: HttpClient) {
    var config = {
      authority: apiSettings.stsAuthority,
      client_id: apiSettings.clientId,
      redirect_uri: `${apiSettings.clientRoot}assets/oidc-login-redirect.html`,
      scope: 'openid projects-api profile',
      response_type: 'id_token token',
      post_logout_redirect_uri: `${apiSettings.clientRoot}?postLogout=true`,
      userStore: new WebStorageStateStore({ store: window.localStorage })
    };
    this._userManager = new UserManager(config);
    this._userManager.getUser().then(user => {
      if (user && !user.expired) {
        this._user = user;
      }
    });
  }

  login(): Promise<any> {
    return this._userManager.signinRedirect();
  }

  logout(): Promise<any> {
    return this._userManager.signoutRedirect();
  }

  isLoggedIn(): boolean {
    return this._user && this._user.access_token != null && !this._user.expired ;
  }

  getAccessToken(): string {
    return this._user ? this._user.access_token : '';
  }

  signoutRedirectCallback(): Promise<any> {
    return this._userManager.signoutRedirectCallback();
  }
}
