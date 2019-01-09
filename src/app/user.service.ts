import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl = 'http://localhost:8080/gallery';
  constructor(private http :HttpClient) { }
  
  addUser(user : Object) :  Observable<Object> {
    console.log(user);
    return this.http.post(`${this.baseUrl}` + `/create` , user);
  }

  loginUser(username : string , password: string ) :  Observable<Object>{
    return this.http.get(`${this.baseUrl}/${username}/${password}` + '/login' )
  }

  deleteUser(id :Object) :  Observable<any> {
     return this.http.delete(`${this.baseUrl}/${id}`+`/delete`,id);
  }
}
