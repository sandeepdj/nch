import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { DoctorappointComponent } from './pages/doctorappoint/doctorappoint.component';
import { FixedComponent } from './pages/fixed/fixed.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { routing } from './app.routing';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LayoutComponent,
    FooterComponent,
    AppointmentComponent,
    DoctorappointComponent,
    FixedComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
         routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
