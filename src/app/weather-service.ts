import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class WeatherService {

    private apiUrl = 'http://localhost:8080/api'; // URL de votre API Spring Boot
    private weatherData: any;

    constructor(private http: HttpClient) { 
      this.weatherData = {};
    }

    getApi(): Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      return this.http .get(`${this.apiUrl}/callapi`);
    }
  
    getWeather(): Observable<string[]> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      return this.http.get<string[]>(`${this.apiUrl}/calltemp`);
    }

    getWeather2(): Observable<string[]> {
      return this.http.get<string[]>(`${this.apiUrl}/calltemp`);
    }

    getWeatherWithIcon(): Observable<string[]> {
      return this.http.get<string[]>(`${this.apiUrl}/weathernowicon`);
    }
    
    getWeatherByDate(): Observable<Map<string, number[]>> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      return this.http.get<Map<string, number[]>>(`${this.apiUrl}/callapidate`);
    }

    getWeatherByCity(city: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/weatherTown?city=${city}`);
    }
    
}
