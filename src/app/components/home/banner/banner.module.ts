import { BannerService } from './servicios/banner.service';
import { BannerComponent } from './banner.component';
import { NoticiaRelevanteImgComponent } from './banner-img/noticia-relevante-img/noticia-relevante-img.component';
import { BannerImgComponent } from './banner-img/banner-img.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalComponent } from './menu/menu-principal/menu-principal.component';
import { LogginCarritoComponent } from './menu/loggin-carrito/loggin-carrito.component';
import { SearchComponent } from './menu/search/search.component';


@NgModule({
  imports:
  [
    CommonModule
  ],
  declarations:
  [
  MenuComponent, BannerImgComponent,
  NoticiaRelevanteImgComponent, BannerComponent, MenuPrincipalComponent,
  LogginCarritoComponent, SearchComponent
  ],
  exports:
  [
  BannerComponent
  ],
  providers:
  [
  BannerService
  ]
})
export class BannerModule { }
