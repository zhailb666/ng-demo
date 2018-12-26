import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
// import { GdFormModule } from 'gd-form';
import {GdFormModule} from '@ali/gd-form';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    GdFormModule,
  ]
})
export class AppShareModule { }
