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
@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css'],
})
export class ModalEditComponent {
  animal: string = '';
  name: string = '';
  constructor(
    public dialogRef: MatDialogRef<ModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ArticuloRespose,
    private dataService: ServDatosService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardar(form: NgForm) {
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
      },
      (error) => console.log('error: ', error)
    );
  }
}
