import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardsGuard } from './auth/auth-guards.guard';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent,
    canActivate:[AuthGuardsGuard]},
  {path:'articulos', component:ArticulosComponent,
  canActivate:[AuthGuardsGuard]},
  {path:'tiendas', component:TiendasComponent,
  canActivate:[AuthGuardsGuard]},
  {path:'lista-articulos', component:ListaArticulosComponent,
  canActivate:[AuthGuardsGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
