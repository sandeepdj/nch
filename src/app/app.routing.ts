import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HeaderComponent } from './pages/header/header.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { DoctorappointComponent } from './pages/doctorappoint/doctorappoint.component';
import { FixedComponent } from './pages/fixed/fixed.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes : Routes =
  [
    {
      path: '',
      redirectTo: 'NCH',
      pathMatch: 'full'
    },
    {
      path: 'NCH',
      component: LayoutComponent,
      children: [
        { path: '', redirectTo: 'Home', pathMatch: 'full' },

        {path: 'Home', component: HomeComponent},
        {path: 'About', component: HomeComponent},
      ]
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
