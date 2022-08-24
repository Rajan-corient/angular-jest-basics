import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  getCities() {
    // return this.http.get('cities').toPromise();
    return from(
    [
      [
        {id:1, name: 'My To-do 1'}, 
        {id:2, name: 'My To-do 2'}, 
        {id:3, name: 'My TO-DO 3'}
      ]
    ]).toPromise();
  }
}
