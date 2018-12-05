import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'


@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  currentWeather;


  constructor(private _weatherService : WeatherService) {
    this.currentWeather = this._weatherService.generateCurrentWeatherObj()
   }

  ngOnInit() {
    this.getBurbankWeather()
  }

  getBurbankWeather(){
    var self = this
    let weather = this._weatherService.getBurbank()
    weather.subscribe(weatherData => {
      this._weatherService.updateCityWeather(weatherData, self.currentWeather)
    })
  }
}
