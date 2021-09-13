import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountToModule } from 'angular-count-to';
import { AngularTiltModule } from 'angular-tilt';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { Ng5SliderModule } from 'ng5-slider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SharedModule } from '../shared/shared.module';
import { AgencyBlogComponent } from './agency/agency-blog/agency-blog.component';
import { AgencyContentComponent } from './agency/agency-content/agency-content.component';
import { AgencyCopyrightComponent } from './agency/agency-copyright/agency-copyright.component';
import { AgencyCounterComponent } from './agency/agency-counter/agency-counter.component';
import { AgencyFooterComponent } from './agency/agency-footer/agency-footer.component';
import { AgencyHeaderComponent } from './agency/agency-header/agency-header.component';
import { AgencyNavComponent } from './agency/agency-nav/agency-nav.component';
import { AgencyPricingComponent } from './agency/agency-pricing/agency-pricing.component';
import { AgencyServicesComponent } from './agency/agency-services/agency-services.component';
import { AgencySpeakerComponent } from './agency/agency-speaker/agency-speaker.component';
import { AgencyTestimonialComponent } from './agency/agency-testimonial/agency-testimonial.component';
import { AgencyVideoComponent } from './agency/agency-video/agency-video.component';
import { AgencyContactComponent } from './agency/agency-contact/agency-contact.component';

// Agency Layout
import { AgencyComponent } from './agency/agency.component';
import { LayoutsRoutingModule } from './layouts-routing.module';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({
  declarations: [
    AgencyComponent, 
    AgencyNavComponent, 
    AgencyHeaderComponent, 
    AgencyContentComponent, 
    AgencyServicesComponent, 
    AgencyVideoComponent, 
    AgencyCounterComponent, 
    AgencyPricingComponent, 
    AgencySpeakerComponent, 
    AgencyTestimonialComponent, 
    AgencyBlogComponent, 
    AgencyFooterComponent, 
    AgencyCopyrightComponent,
    AgencyContactComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    SharedModule,
    CountToModule,
    AngularTiltModule,
    ScrollToModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule
  ],

  exports: [],

  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})

export class LayoutsModule { }
