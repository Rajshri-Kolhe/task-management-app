import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
export interface User {
  id: number;
  name: string;
  email: string;
  mobileNo: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loginApiUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  login(email:string,password:string):Observable<any>{
return this.http.post<User>(`${this.loginApiUrl}/login`,{email,password}).pipe(
 tap(user=>
  localStorage.setItem('userId',user.id.toString())) 
)
  }

  signUp(name:string, email:string, mobileNo:any,password:any):Observable<any>{
return this.http.post(`${this.loginApiUrl}/add-user`,{name,email,mobileNo,password})
  }
//get logged in user details
   getProfile(): Observable<User> {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      throw new Error('No user logged in');
    }
    return this.http.get<User>(`${this.loginApiUrl}/add-user/${userId}`);
  }
//update logged in user details
 updateUser(id: number, data: Partial<User & {password?: string}>): Observable<any> {
  return this.http.put(`${this.loginApiUrl}/update-user/${id}`, data);
}
//logout user
logOutUser(){
  localStorage.removeItem('userId');  
}

}
