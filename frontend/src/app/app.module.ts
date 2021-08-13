import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';

registerLocaleData(localeHu);

import { AreusFormModule } from './areus-form/areus-form.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { SideNavComponent } from './common/side-nav/side-nav.component';
import { UsersComponent } from './page/users/users.component';
import { DataTableComponent } from './common/data-table/data-table.component';
import { LoginComponent } from './page/login/login.component';
import { JwtInterceptorInterceptor } from './service/jwt-interceptor.interceptor';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { SignupComponent } from './page/signup/signup.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { AuthorsComponent } from './page/authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideNavComponent,
    UsersComponent,
    DataTableComponent,
    LoginComponent,
    NotFoundComponent,
    DashboardComponent,
    SignupComponent,
    CategoriesComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AreusFormModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'hu-HU'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
