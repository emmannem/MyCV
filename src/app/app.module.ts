import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

import { HttpClientModule } from '@angular/common/http';
import { SkilsComponent } from './skils/skils.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { InteresComponent } from './interes/interes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    SkilsComponent,
    CertificadosComponent,
    InteresComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
