import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InscrireService {


  constructor(
    private http : HttpClient
  ) { }

  save (data:any):Observable<any>{
    return this.http.post(`${environment.apiUrl}/inscription`, data);
  }
}
