import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../models/user-profile';
import { apiSettings } from './appsettins';
import { Observable } from  'rxjs';
import { catchError, map } from "rxjs/operators";
@Injectable()
export class AccountService {
    userProfile:  UserProfile  = {
      id: '',
      email: '',
      firstName: '',
      lastName: '',
      userPermissions: []
    } ;
    constructor(private _httpClient: HttpClient) { }

    getAllUsers(): Observable<UserProfile[]> {
        return this._httpClient.get<UserProfile[]>(apiSettings.URLAPI + 'Account/Users');
    }

    createUserProfile(userProfile: UserProfile) {
        return this._httpClient.post(`${apiSettings.URLAPI}Account/Profile`, userProfile);
    }

    updateUserProfile(userProfile: UserProfile) {
        return this._httpClient.put(`${apiSettings.URLAPI}Account/Profile/${userProfile.id}`, userProfile);
    }

    register(userInfo: any) {
        return this._httpClient.post(`${apiSettings.URLAPI}Account/Register`, userInfo);

    }
}
