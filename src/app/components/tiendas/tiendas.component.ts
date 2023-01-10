import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Tienda } from 'src/app/models/Tienda';
import { ServDatosService } from 'src/app/servicios/serv-datos.service';
@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {
  tiendafrm:any;
  tiendaItem :  any  ={
    id:0,
    Sucursak: "",
    Direccion:"",
  }
  constructor(private fb: FormBuilder, private dataService: ServDatosService) { }

  ngOnInit(): void {
    this.tiendafrm = this.fb.group({

      Sucursal:['Samy',Validators.required],
      Direccion: ['00004',Validators.required],
    });
  }

  guardar(){
    debugger;
    console.log(this.tiendafrm);
    console.log('Saved: ',  this.tiendafrm.value );

    this.tiendafrm.id = -1;
    this.tiendafrm.CodigoCn = this.tiendafrm.value.CodigoCn;
    this.tiendafrm.Descripcion = this.tiendafrm.value.Descripcion;

    if (this.tiendafrm.valid) {
      this.dataService.postTienda(this.tiendafrm.value).subscribe(
        result => {

          console.log('success', result);
          console.log('Guardado.....');

      },
        error=> console.log('error: ', error)

      )

    }
  }

}
