import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }
