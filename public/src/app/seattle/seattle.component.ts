import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  currentWeather

  constructor(private _weatherService : WeatherService) {
    this.currentWeather = this._weatherService.generateCurrentWeatherObj()
   }

  ngOnInit() {
    this.getSeattleWeather()
  }
  getSeattleWeather(){
    var self = this
    let weather = this._weatherService.getSeattle()
    weather.subscribe(data => {
      this._weatherService.updateCityWeather(data, self.currentWeather)
    })
  }

}
