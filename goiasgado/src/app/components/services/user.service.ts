import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl+'/users', user);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<User[]>(this.apiUrl+'/users');
  }

  updateUser(user: any): Observable<any> {
    const url = `${this.apiUrl+'/users'}/${user.id}`;
    return this.http.put(url, user);
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl+'/users'}/${userId}`;
    return this.http.delete(url);
  }

  login(username: string, password: string): Observable<any> {
    // const loginData = {
    //   email: username,
    //   password: password
    // };
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // return this.http.post(`${this.apiUrl}/oauth/token`, loginData, { headers: headers })
      const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic BASE64_ENCODED_CLIENT_CREDENTIALS',
    });

    const body = `username=${username}&password=${password}&grant_type=password`;

    return this.http.post(`${this.apiUrl}/oauth/token`, body, { headers });
  }

  refreshToken(refreshToken: string): Observable<any> {
    const refreshTokenData = {
      refreshToken: refreshToken
    };

    return this.http.post(this.apiUrl+'/refresh-token', refreshTokenData);
  }

}