import { Component, OnInit } from '@angular/core';
import {UserManageService} from '../../page-front-service/user-manage.service';
import {BaseComponent} from '../../base/base-component';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.less']
})
export class UserManageComponent extends BaseComponent {
  dataSet: any[];
  loading = true;
  constructor(private userManageService: UserManageService) {
    super();
  }

  protected launch(): void {
    this.getData();
  }

  getData(value?: string) {
    this.userManageService.getUserManage(value).subscribe( (data) => {
      this.loading = false;
      this.dataSet = data;
    });
  }

  protected init(): void {}

}
