import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather-service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{

    apiData: any;
    weatherData:string[] = [];
   

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
   
    // this.weatherService.getApi().subscribe(data => {
    //   this.apiData = data;
    //   console.log("this.apiData: ", JSON.stringify(this.apiData, null, 2));
    // });

    this.weatherService.getWeather().subscribe(data => {
        this.weatherData = data;
        console.log("Weather Data: ", this.weatherData);
      });

      this.weatherService.getWeatherWithIcon().subscribe(data => {
        this.weatherData = data;
        console.log("Weather Data: ", this.weatherData);
      });
    }
  }
