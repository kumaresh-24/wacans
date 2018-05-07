import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getdata(url: string) {
    return this.http.get<any>(url);
  }

  postdata(url: string, data: any) {

    const headers = new HttpHeaders();
    let body = new HttpParams();
    body = body.set('data', JSON.stringify(data));
    return this.http.post<any>(url, body, { headers: headers });
  }
}
