import { Injectable } from '@angular/core';
import { DatosUser } from '../models/DatosUser';


@Injectable({
  providedIn: 'root'
})
export class SrvGeneralInfoService {
  datosUserInfo: DatosUser = {
    id: -1,
    IdUser: '',
    IsLogged: false
  };
  constructor() {

  }
}
