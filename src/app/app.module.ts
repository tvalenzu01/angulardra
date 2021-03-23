import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/landpage/header/header.component';
import { ServiciosComponent } from './components/landpage/servicios/servicios.component';
import { BannerComponent } from './components/landpage/banner/banner.component';
import { FooterComponent } from './components/landpage/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
//import { routing, appRoutingProviders } from './app.routing';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './auth/login/login.component';
import { PerfilComponent } from './perfil/perfil.component';

import { SidebarModule } from 'ng-sidebar';

import { SliderComponent } from './components/landpage/slider/slider.component';
import { MenuComponent } from './components/landpage/menu/menu.component';

//import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServiciosComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    ErrorComponent,
    LoginComponent,
    PerfilComponent,
    SliderComponent,
    MenuComponent,
   // SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
