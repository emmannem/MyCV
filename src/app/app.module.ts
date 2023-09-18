import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

import { HttpClientModule } from '@angular/common/http';
import { SkilsComponent } from './skils/skils.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, WorkExperienceComponent, SkilsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
