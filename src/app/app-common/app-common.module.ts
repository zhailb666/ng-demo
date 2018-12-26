import {NgModule} from '@angular/core';
import {AppShareModule} from '../app-share/app-share.module';
import {ShortCutSelectComponent} from './short-cut-select/short-cut-select.component';
import {MoveDivDirective} from './directive/moveDiv';
import {MyDatePipe} from './pipe/myDate';
// ng g d XXX/XXX 生成管道文件；
@NgModule({
  imports: [
    AppShareModule
  ],
  declarations: [
    ShortCutSelectComponent,
    MoveDivDirective,
    MyDatePipe
  ],
  exports: [
    ShortCutSelectComponent,
    MoveDivDirective,
    MyDatePipe
  ]
})
export class AppCommonModule { }
