import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { DoctorappointComponent } from './pages/doctorappoint/doctorappoint.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LayoutComponent,
    FooterComponent,
    AppointmentComponent,
    DoctorappointComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
