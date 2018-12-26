import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {AppRoutingModule} from './app-routing.module';
import {ReadmeComponent} from './readme/readme.component';
import {AppShareModule} from './app-share/app-share.module';
import {AppCoreModule} from './app-core/app-core.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ReadmeComponent
  ],
  imports: [
    AppCoreModule,
    AppShareModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
