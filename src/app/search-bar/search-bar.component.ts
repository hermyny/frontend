import { Component } from '@angular/core';
import { WeatherService } from '../weather-service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  city: string = "";
  weather:any;
  errorMessage: string | null = null;


  constructor(private weatherService: WeatherService) { }

  searchWeather() {
    if (this.city.trim()) {
      this.weatherService.getWeatherByCity(this.city).subscribe({
        next:data => {
          this.weather = data;
          this.errorMessage = null;

        },
        error: err => {
          this.weather = null;
          this.errorMessage = 'City not found or error occurred!';
        }

        });
      }
    } 
}


