import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Articulo } from 'src/app/models/Articulo';
import { ServDatosService } from 'src/app/servicios/serv-datos.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  articulofrm:any;
  articuloItem :  any  ={

    CodigoCn: "",
    Descripcion:"",
    Precio:0,
    Imagen:'',
    Stock: 0

  }
  constructor(private fb: FormBuilder, private dataService: ServDatosService
    ) {

  }

  ngOnInit(): void {
    this.articulofrm = this.fb.group({
      id :[],
      CodigoCn:['Samy',Validators.required],
      Descripcion: ['00004',Validators.required],
      Precio: [0],
      Imagen: ['Samy',Validators.required],
      Stock: ['0',Validators.required],
    });
  }

  guardar(){
    debugger;
    console.log(this.articulofrm);
    console.log('Saved: ',  this.articulofrm.value );

    this.articuloItem.id = -1;
    this.articuloItem.CodigoCn = this.articulofrm.value.CodigoCn;
    this.articuloItem.Descripcion = this.articulofrm.value.Descripcion;
    this.articuloItem.Imagen = this.articulofrm.value.Imagen;
    this.articuloItem.Precio = Number(this.articulofrm.value.Precio);
    this.articuloItem.Stock = Number(this.articulofrm.value.Stock);



    if (this.articulofrm.valid) {
      this.dataService.postArticulo(this.articuloItem).subscribe(
        result => {console.log('success', result);

      },
        error=> console.log('error: ', error)

      )
     console.log('Guardado.....');
    }
  }
}
