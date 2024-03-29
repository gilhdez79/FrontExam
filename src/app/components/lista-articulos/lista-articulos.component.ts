import { Component, OnInit,Inject } from '@angular/core';
import { Articulo, ArticuloRespose } from '../../models/Articulo';
import { ServDatosService } from 'src/app/servicios/serv-datos.service';
import {of, from, map, tap, take} from 'rxjs';
import {MatDialog,MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { CommonService, toastPayload } from 'src/app/servicios/common.service';
import { IndividualConfig } from 'ngx-toastr';
@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {
  articuloSelec: Articulo | undefined;
  listArticulos: ArticuloRespose[]= [];
  title ='Mensaje';
  toast!: toastPayload;

  constructor(private dataService: ServDatosService,
    public dialog: MatDialog,
     private cs: CommonService) { }

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

  elimnarArticulo(item:ArticuloRespose){

    let ItemArticulo: Articulo = {
      id:  item.id,
      CodigoCn: item.codigoCn,
      Descripcion: item.descripcion,
      Imagen: item.imagen,
      Precio: Number(item.precio),
      Stock: Number(item.stock),
    };

    this.dataService.deleteArticulo(ItemArticulo.id).subscribe(
      (result) => {
        console.log('Eliminado', result);

        this.toast={
          message: 'Articulo eliminado',
          title:'Titulo',
          type: 'success',
          ic:{
            timeOut: 2500,
            closeButton: true,
          } as  IndividualConfig,
        };

        this.cs.showToast(this.toast);
      },
      (error) => {
        this.toast={
          message: 'Hubo un error ',
          title:'Titulo',
          type: 'success',
          ic:{
            timeOut: 2500,
            closeButton: true,
          } as  IndividualConfig,
        };

        this.cs.showToast(this.toast);
      }
    );
  }
}
