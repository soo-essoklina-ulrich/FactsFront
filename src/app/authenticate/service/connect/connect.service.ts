import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  private url = environment.apiUrl

  constructor(
    private http:HttpClient,
  ) { }

  connect(data:any):Observable<any>{
    return this.http.post<any>(`${this.url}/connexion`, data )
  }

}
