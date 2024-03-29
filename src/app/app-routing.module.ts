import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate} from '@angular/router';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { SeguridadGuard } from './seguridad.guard';

const routes: Routes = [
  { path:'articulos',
   component:ArticulosComponent,

  },
  {path:'tiendas', component:TiendasComponent},
  {path:'lista-articulos', component:ListaArticulosComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
