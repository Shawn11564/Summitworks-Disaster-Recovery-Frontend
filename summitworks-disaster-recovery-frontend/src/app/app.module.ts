import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ContractorComponent } from './contractor/contractor.component';
import { ManagementComponent } from './management/management.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { SiteobjectComponent } from './siteobject/siteobject.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    AdminComponent,
    ContractorComponent,
    ManagementComponent,
    SiteobjectComponent,
    TimesheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
