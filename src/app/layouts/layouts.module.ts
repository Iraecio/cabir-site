import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {SwiperModule, SWIPER_CONFIG, SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CountToModule} from 'angular-count-to';
import {GalleryModule} from '@ks89/angular-modal-gallery';
import {AngularTiltModule} from 'angular-tilt';
import {ScrollToModule} from 'ng2-scroll-to-el';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPayPalModule} from 'ngx-paypal';
import {Ng5SliderModule} from 'ng5-slider';
import {SharedModule} from '../shared/shared.module'

// Modern SASS Layout
import {ModernSassComponent} from './modern-sass/modern-sass.component';
import {ModernSassNavComponent} from './modern-sass/modern-sass-nav/modern-sass-nav.component';
import {ModernSassHeaderComponent} from './modern-sass/modern-sass-header/modern-sass-header.component';
import {ModernSassFeatureComponent} from './modern-sass/modern-sass-feature/modern-sass-feature.component';
import {ModernSassBusinessComponent} from './modern-sass/modern-sass-business/modern-sass-business.component';
import {ModernSassServicesComponent} from './modern-sass/modern-sass-services/modern-sass-services.component';
import {ModernSassScreenshotsComponent} from './modern-sass/modern-sass-screenshots/modern-sass-screenshots.component';
import {ModernSassPricingComponent} from './modern-sass/modern-sass-pricing/modern-sass-pricing.component';
import {ModernSassTestimonialComponent} from './modern-sass/modern-sass-testimonial/modern-sass-testimonial.component';
import {ModernSassBrandComponent} from './modern-sass/modern-sass-brand/modern-sass-brand.component';
import {ModernSassFooterComponent} from './modern-sass/modern-sass-footer/modern-sass-footer.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({
    declarations: [
        ModernSassComponent,
        ModernSassNavComponent,
        ModernSassHeaderComponent,
        ModernSassFeatureComponent,
        ModernSassBusinessComponent,
        ModernSassServicesComponent,
        ModernSassScreenshotsComponent,
        ModernSassPricingComponent,
        ModernSassTestimonialComponent,
        ModernSassBrandComponent,
        ModernSassFooterComponent
    ],
    imports: [
        CommonModule,
        SwiperModule,
        CarouselModule,
        NgbModule,
        GalleryModule.forRoot(),
        SharedModule,
        CountToModule,
        AngularTiltModule,
        ScrollToModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        NgxPayPalModule,
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

export class LayoutsModule {
}
