import { Component, OnInit, inject, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import { ArticuloRespose } from 'src/app/models/Articulo';
@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent     {
  animal: string = "";
  name: string ="";
  constructor( public dialogRef: MatDialogRef<ModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ArticuloRespose) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

    guardar(form:NgForm){

      console.log(this.data);

    }
}


