import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  currentWeather
  constructor(private _weatherService : WeatherService) {
    this.currentWeather = this._weatherService.generateCurrentWeatherObj()
  }

  ngOnInit() {
    this.getSanJoseWeather()
  }

  getSanJoseWeather(){
    var self = this
    let weather = this._weatherService.getSanJose()
    weather.subscribe(data => {
      this._weatherService.updateCityWeather(data, self.currentWeather)
    })
  }

}
