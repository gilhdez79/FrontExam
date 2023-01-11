import { Component, OnInit } from '@angular/core';
import { Articulo, ArticuloRespose } from '../../models/Articulo';
import { ServDatosService } from 'src/app/servicios/serv-datos.service';
import {of, from, map, tap, take} from 'rxjs';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {

  listArticulos: ArticuloRespose[]= [];
  constructor(private dataService: ServDatosService) { }

  ngOnInit(): void {
    this.obtenerListaArticulos();
  }

  obtenerListaArticulos(){
     this.dataService.geAlltArticulo().subscribe(
      result => {console.log('success', result);

      this.listArticulos = result ;
      console.log('success', this.listArticulos);
    },
      error=> console.log('error: ', error)



     );
  //  console.log('Guardado.....');

  }

}
