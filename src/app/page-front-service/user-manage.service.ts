import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserManageService {
  private getUserUrl = 'http://localhost:3000/api/books';  // URL to web api
  constructor(private http: HttpClient) { }

  /**获取user 信息*/
  getUserManage(value?: string): Observable<any[]> {
    let params = {};
    if (value) {
      params = {id: value};
    }
    return this.http.get<any[]>(this.getUserUrl, {params: params});
  }
}
