import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {httpInterceptorProviders} from './http-intercepts';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [httpInterceptorProviders]
})
export class AppCoreModule { }
