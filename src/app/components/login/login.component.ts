import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatosUser } from 'src/app/models/DatosUser';
import { AuthService } from 'src/app/servicios/auth.service';
import { ServDatosService } from 'src/app/servicios/serv-datos.service';
import { SrvGeneralInfoService } from 'src/app/servicios/srv-general-info.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginfrm:any;
  logginItem :  DatosUser  ={
    id:-1,
    IdUser:"",
    IsLogged: false
  }
  constructor(private fb: FormBuilder, private dataService: AuthService,
   public srvDatosGral:SrvGeneralInfoService,
   private router: Router) {}

  ngOnInit(): void {
    this.loginfrm = this.fb.group({
      id :[],
      IdUser:['',Validators.required],
      Password: ['',Validators.required],

    });

  }
  loggin(){

    this.logginItem.id = -1;
    this.logginItem.IdUser = this.loginfrm.value.IdUser;
    this.logginItem.Password = this.loginfrm.value.Password;

    if (this.loginfrm.valid) {
      this.dataService.geLogin(this.logginItem).subscribe(
        result => {console.log('success', result);

        if (result['objReturn'] !=null){
          this.srvDatosGral.datosUserInfo.IsLogged = true;
          this.router.navigate(['/lista-articulos']);

        }else{
          this.srvDatosGral.datosUserInfo.IsLogged = false;
          Swal.fire({
            icon: 'error',
            title: 'Información',
            text: 'Usuario o Contraseña Invalida',
            footer: '<a href="">Why do I have this issue?</a>'
          });
        }

      },
        error=> console.log('error: ', error)

      )
     console.log('Guardado.....');
    }
  }
}
