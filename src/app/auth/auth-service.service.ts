import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Login } from 'src/assets/typescript/type';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  login(data: Login): Observable<any> {
    return this.http.post(`${baseUrl}/user/login`, data);
  }

  loggedIn(): Observable<any> {
    return this.http.post(
      `${baseUrl}/user/check-auth`,
      localStorage.getItem('token')
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
