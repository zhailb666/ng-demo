import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReadmeComponent} from './readme/readme.component';
import {FormComponent} from './form/form.component';
import {PdfHtmlComponent} from './pdf-html/pdf-html.component';
import {UserManageComponent} from './user-manage/user-manage.component';

const routes: Routes = [
  { path: 'readme', component: ReadmeComponent},
  { path: 'form', component: FormComponent},
  { path: 'pdf', component: PdfHtmlComponent},
  { path: 'userManage', component: UserManageComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PageFrontRoutingModule { }
