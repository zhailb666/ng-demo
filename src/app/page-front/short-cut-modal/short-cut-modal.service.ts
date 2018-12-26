import {Injectable} from '@angular/core';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';
import {ShortCutModalComponent} from './short-cut-modal.component';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ShortCutModalService {
  ref: NzModalRef;
  private clickItem = new Subject();
  clickItem$ = this.clickItem.asObservable();
  fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
  constructor(private nzModalService: NzModalService, private http: HttpClient) {
  }
  /**
   * 显示modal框
   */
  showModel() {
    this.ref = this.nzModalService.create({
      nzComponentParams: {
        itemClickBack: (item) => {
          this.closeModel();
          this.clickItem.next(item);
        }
      },
      nzTitle: '快捷语',
      nzWidth: '650px',
      nzBodyStyle: {position: 'relative', height: '500px', padding: '16px'},
      nzContent: ShortCutModalComponent,
      nzFooter: null,
    });
  }

  /**
   * 获取数据
   */
  getData(): Observable<Object> {
    return this.http.get(this.fakeDataUrl);
  }

  /**
   * 关闭modal
   */
  closeModel() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
