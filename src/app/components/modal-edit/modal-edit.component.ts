import { Component, OnInit, inject, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { ArticuloRespose } from 'src/app/models/Articulo';
import { ServDatosService } from 'src/app/servicios/serv-datos.service';
import { Articulo } from '../../models/Articulo';
import { CommonService, toastPayload } from 'src/app/servicios/common.service';
import { timeout } from 'rxjs';
import { IndividualConfig } from 'ngx-toastr';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css'],
})
export class ModalEditComponent {
  animal: string = '';
  name: string = '';
  title ='Mensaje';
  toast!: toastPayload;
  constructor(
    public dialogRef: MatDialogRef<ModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ArticuloRespose,
    private dataService: ServDatosService,
    private cs: CommonService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(form: NgForm):void{
    debugger;
    console.log(this.data);

    let ItemArticulo: Articulo = {
      id: this.data.id,
      CodigoCn: this.data.codigoCn,
      Descripcion: this.data.descripcion,
      Imagen: this.data.imagen,
      Precio: Number(this.data.precio),
      Stock: Number(this.data.stock),
    };

    this.dataService.putArticulo(ItemArticulo).subscribe(
      (result) => {

        console.log('success', result);
        this.toast={
          message: 'Articulo guardado',
          title:'Mensaje',
          type: 'success',
          ic:{
            timeOut: 2500,
            closeButton: true,
          } as  IndividualConfig,


        };

        this.cs.showToast(this.toast);
        this.dialogRef.close();
      },
      (error) => console.log('error: ', error)
    );

  }

  buttonClick(type:string):void{
    this.toast={
      message: 'Show Articulo',
      title:'Titulo',
      type: type,
      ic:{
        timeOut: 2500,
        closeButton: true,
      } as  IndividualConfig,
    };

    this.cs.showToast(this.toast);
  }
}
