import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component'
import { ErrorComponent } from './components/error/error.component';
import {PerfilComponent} from './perfil/perfil.component'

const routes: Routes = [

  // { path: '', redirectTo: '/home' , pathMatch: 'full'},
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
