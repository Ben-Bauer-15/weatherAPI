import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service'



@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  currentWeather;

  constructor(private _weatherService : WeatherService) {
    this.currentWeather = this._weatherService.generateCurrentWeatherObj()
   }

  ngOnInit() {
    this.getChicagoWeather()
  }

  getChicagoWeather(){
    var self = this
    let weather = this._weatherService.getChigaco()
    weather.subscribe(data => {
      this._weatherService.updateCityWeather(data, self.currentWeather)
    })
  }

}
