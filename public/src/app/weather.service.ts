import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http : HttpClient) { }
  
  getSanJose(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=5392171&APPID=4a93863bedc5bcc9980fd94e5215c3f0')
  }
  getWashington(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=4140963&APPID=4a93863bedc5bcc9980fd94e5215c3f0')
  }
  getDallas(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=4684888&APPID=4a93863bedc5bcc9980fd94e5215c3f0')
  }
  getChigaco(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=4887398&APPID=4a93863bedc5bcc9980fd94e5215c3f0')
  }
  getSeattle(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=5809844&APPID=4a93863bedc5bcc9980fd94e5215c3f0')
  }
  getBurbank(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?id=5331835&APPID=4a93863bedc5bcc9980fd94e5215c3f0')
  }

  updateCityWeather(data, obj){
    obj.humidity = data.main.humidity
    obj.tempMax = data.main.temp_max
    obj.tempMin = data.main.temp_min
    obj.tempAvg = ((obj.tempMax + obj.tempMin) / 2)
    obj.status = data.weather[0].description
  }

  generateCurrentWeatherObj(){
    var obj = {humidity : '', tempAvg : '', tempMax : '', tempMin : '', status : ''}
    return obj
  }
}
