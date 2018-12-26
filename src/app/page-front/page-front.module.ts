import {NgModule} from '@angular/core';
import {ReadmeComponent} from './readme/readme.component';
import {PageFrontRoutingModule} from './page-front-routing.module';
import {FormComponent} from './form/form.component';
import {ShortCutModalComponent} from './short-cut-modal/short-cut-modal.component';
import {AppShareModule} from '../app-share/app-share.module';
import {AppCommonModule} from '../app-common/app-common.module';
import { PdfHtmlComponent } from './pdf-html/pdf-html.component';
import { UserManageComponent } from './user-manage/user-manage.component';

@NgModule({
  imports: [
    AppShareModule,
    PageFrontRoutingModule,
    AppCommonModule
  ],
  declarations: [
    ReadmeComponent,
    FormComponent,
    ShortCutModalComponent,
    PdfHtmlComponent,
    UserManageComponent
  ],
  entryComponents: [ShortCutModalComponent]
})
export class PageFrontModule { }
