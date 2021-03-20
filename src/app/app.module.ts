import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { ErrorModule } from './error-pages/error.module';
import { LibraryManagementModule } from './library-management/library-management.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    ErrorModule,
    CoreModule,
    LibraryManagementModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
