import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/User';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserInformationService {

  private url = 'https://jsonplaceholder.typicode.com/users';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}



  GetDatas() {
    
    return this.httpClient.get<User[]>(this.url,this.httpOptions)
                      .pipe(map((result)=> result));
                        
  }
}
