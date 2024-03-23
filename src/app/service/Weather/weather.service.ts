import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = environment.weatherapiKey;
  private apiUrl = environment.weatherApiUrl
  constructor(
    private http: HttpClient
  ) { }

  getWeatherByCity(city: string) {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&lang=fr&units=metric`);
  }
}
