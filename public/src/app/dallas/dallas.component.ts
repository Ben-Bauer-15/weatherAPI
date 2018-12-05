import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  currentWeather
  constructor(private _weatherService : WeatherService) {
    this.currentWeather = this._weatherService.generateCurrentWeatherObj()
   }
  ngOnInit() {
    this.getDallasWeather()
  }

  getDallasWeather(){
    var self = this
    let weather = this._weatherService.getDallas()
    weather.subscribe(data => {
      this._weatherService.updateCityWeather(data, self.currentWeather)
    })
  }

}
