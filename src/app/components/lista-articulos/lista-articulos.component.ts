import { Component, OnInit,Inject } from '@angular/core';
import { Articulo, ArticuloRespose } from '../../models/Articulo';
import { ServDatosService } from 'src/app/servicios/serv-datos.service';
import {of, from, map, tap, take} from 'rxjs';
import {MatDialog,MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {
  articuloSelec: Articulo | undefined;
  listArticulos: ArticuloRespose[]= [];
  constructor(private dataService: ServDatosService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerListaArticulos();
  }

  obtenerListaArticulos(){
     this.dataService.geAlltArticulo().subscribe(
      result => {
      console.log('success', result);
      this.listArticulos = result ;
      console.log('success', this.listArticulos);
    },
      error=> console.log('error: ', error)
     );
  //  console.log('Guardado.....');

  }

  openDialog(item:ArticuloRespose): void {
    const dialogRef = this.dialog.open(ModalEditComponent, {
      data: item,
      height: '600px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}
