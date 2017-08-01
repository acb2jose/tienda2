import { BannerModule } from './banner/banner.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BannerModule
  ],
  declarations:
  [
    HomeComponent
  ],
  exports:
  [
   HomeComponent
  ]
})
export class HomeModule { }
