import { Injectable } from "@angular/core";
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Articulo, ArticuloRespose } from '../models/Articulo';
import { apiSettings } from '../core/appsettins';
import { Tienda } from '../models/Tienda';
import {from, map, tap, take} from 'rxjs';
import { DatosUser } from "../models/DatosUser";
@Injectable(  {providedIn: 'root'})
export class AuthService{

  constructor(private http:HttpClient) {

  }

  geLogin(datosUser: DatosUser ): Observable<any>{
    const httpOptions : any    = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post(apiSettings.URLAPI + apiSettings.CTRUSER+ "/login",datosUser, httpOptions);
  }
}
