import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  data: any;
  repository:any;
  repoReslt: any;
  constructor(private http: HttpClient) { }

  usersearchResult() {
    let apiURL = 'https://api.github.com/users';
    return this.http.get(apiURL)
      .pipe(map(
        res => {
          this.data = res;
          return res;
        },
        err => {
          return err;
        }
      ));
  }
getid(repourl) {
  let apiURL = 'https://api.github.com/users/' + repourl + '/repos';
  console.log("testing ",apiURL);
 let url = apiURL;
 return this.http.get(apiURL)
 .pipe(map (
   res => {
     this.repoReslt = res;
     return res;
   },
   err => {
     return err;
   }
 ));
  }
}
