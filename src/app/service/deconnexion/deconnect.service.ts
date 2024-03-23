import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class DeconnectService {
  url = environment.apiUrl;

  constructor(
    private http:HttpClient,
  ) { }

  Deconnexion() {
    return this.http.post(`${this.url}/deconnexion`,null ,{headers: {Authorization: `Bearer ${localStorage.getItem('bearer')}`}});
  }
}
