import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Articulo, ArticuloRespose } from '../models/Articulo';
import { apiSettings } from '../core/appsettins';
import { Tienda } from '../models/Tienda';
import {from, map, tap, take} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServDatosService {

  constructor(private http:HttpClient) {

   }

   postArticulo(articulo: Articulo ): Observable<any>{
    let httpOptions : any    = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'POST'
      })
    };

    return this.http.post(apiSettings.URLAPI + apiSettings.CTRARTICULO, JSON.stringify(articulo), httpOptions);
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

    return this.http.put(apiSettings.URLAPI + apiSettings.CTRARTICULO, httpOptions);
  }

  deleteArticulo(id: Number ): Observable<any>{
    const httpOptions : any    = {
      headers: new HttpHeaders({
        //'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'DELETE',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.delete(apiSettings.URLAPI + apiSettings.CTRARTICULO+"/"+id,  httpOptions);
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

    return this.http.get(apiSettings.URLAPI + apiSettings.CTRARTICULO,httpOptions);
  }
  geAlltArticulo(): Observable<ArticuloRespose[]>{
    const httpOptions : any    = {
      headers: new HttpHeaders({
        //'Content-Type':  'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get(apiSettings.URLAPI + apiSettings.CTRARTICULO, httpOptions)
    .pipe(
      map((data:any)=>{
        return data;
        console.log('resultado consulta');

        console.log(data);

      }),
      catchError(error=>{
        return throwError('Capital');

      })

    );
  }

  postTienda(tienda: Tienda ): Observable<any>{
    let httpOptions : any    = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'POST'
      })
    };

    return this.http.post(apiSettings.URLAPI + apiSettings.CTRTIENDA, tienda, httpOptions);
  }
}


