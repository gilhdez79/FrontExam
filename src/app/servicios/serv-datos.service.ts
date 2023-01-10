import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Articulo } from '../models/Articulo';
import { apiSettings } from '../core/appsettins';


@Injectable({
  providedIn: 'root'
})
export class ServDatosService {

  constructor(private http:HttpClient) {

   }

   postArticulo(articulo: Articulo ): Observable<any>{
    const httpOptions : any    = {
      headers: new HttpHeaders({
       'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post(apiSettings.URLAPI + apiSettings.CTRARTICULO, JSON.stringify(articulo));
  }

  putArticulo(empleado: Articulo ): Observable<any>{
    const httpOptions : any    = {
      headers: new HttpHeaders({
        //'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'PUT',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.put(apiSettings.URLAPI + apiSettings.CTRARTICULO,  httpOptions);
  }

  deleteArticulo(empleado: Articulo ): Observable<any>{
    const httpOptions : any    = {
      headers: new HttpHeaders({
        //'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'DELETE',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.delete(apiSettings.URLAPI + apiSettings.CTRARTICULO,  httpOptions);
  }
  getArticulo(empleado: Articulo ): Observable<any>{
    const httpOptions : any    = {
      headers: new HttpHeaders({
        //'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.delete(apiSettings.URLAPI + apiSettings.CTRARTICULO);
  }
}
