import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Security/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private apiUrl = 'http://localhost:8081/moneylend/afficherUser';
  private ajouterUrl = 'http://localhost:8081/moneylend/ajouterUser';
  private getbyidUrl = "http://localhost:8081/moneylend/afficherUseravecId/"
  private PutUrl = "http://localhost:8081/moneylend/modifierUser"
  private deleteUrl = "http://localhost:8081/moneylend/deleteUser"
  private getbymail = "http://localhost:8081/moneylend/afficherUseravecemail/"


  constructor(private httpClient : HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.apiUrl)
  }

  createUser(user: User): Observable<Object>{
    return this.httpClient.post(this.ajouterUrl,user);
  }
  getuserbyid(id:number){

    return this.httpClient.get<User>(this.getbyidUrl+id)
  }

getuserbyemail(email:string){

    return this.httpClient.get<User>(this.getbymail+email)
  }



  
  
  updateuser(user: User){
  
  return this.httpClient.put<User>(this.PutUrl,user);
  
  }

  deleteuser(user: User){
  
    return this.httpClient.delete<void>(this.deleteUrl, { body: user });
    
    }








}
