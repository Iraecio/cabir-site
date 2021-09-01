import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ModernSassComponent} from './layouts/modern-sass/modern-sass.component'
import {from} from 'rxjs';

export const routes: Routes = [
    {
        path: '',
        component: ModernSassComponent,
        data: {
            title: "Modern SASS| Unice Landing Page"
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        // preloadingStrategy: PreloadAllModules,
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        initialNavigation: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
