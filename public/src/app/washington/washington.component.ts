import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  currentWeather

  constructor(private _weatherService : WeatherService) {
    this.currentWeather = this._weatherService.generateCurrentWeatherObj()
   }

  ngOnInit() {
    this.getWashingtonWeather()
  }

  getWashingtonWeather(){
    var self = this
    let weather = this._weatherService.getWashington()
    weather.subscribe(data => {
      this._weatherService.updateCityWeather(data, self.currentWeather)
    })
  }


}
