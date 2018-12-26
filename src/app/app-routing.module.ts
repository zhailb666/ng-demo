import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReadmeComponent} from './readme/readme.component';
import {AuthGuard} from './page-front/auth.guard';

const routes: Routes = [
  {
    path: 'front',
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: './page-front/page-front.module#PageFrontModule',
  },
  { path: '', redirectTo: 'front/userManage', pathMatch: 'full' },
  { path: 'readme', component: ReadmeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
