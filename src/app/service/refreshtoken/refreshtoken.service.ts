import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RefreshtokenService {
  url = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  refreshToken(refresh:any):Observable<any> {
    console.log(refresh);
    return this.http.post<any>(`${(this.url)}/refresh-token`, refresh);
  }
}
