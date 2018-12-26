import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortCutSelectService {

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
