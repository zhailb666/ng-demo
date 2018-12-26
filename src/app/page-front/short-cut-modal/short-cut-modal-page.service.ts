import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ShortCutModalPageService {
  fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
  constructor(private http: HttpClient) {
  }

  /**
   * 获取数据
   */
  getData(): Observable<Object> {
    return this.http.get(this.fakeDataUrl);
  }
}
