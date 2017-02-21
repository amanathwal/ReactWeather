var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=fecf90f42942cf05377bc22252b8321c';

//http://api.openweathermap.org/data/2.5/find?units=imperial&appid=fecf90f42942cf05377bc22252b8321c
//appid=fecf90f42942cf05377bc22252b8321c
module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
   debugger;
   return axios.get(requestUrl).then(function(res) {
     if (res.data.cod && res.data.message) {
       throw new Error(res.data.message);
     } else {
       return res.data.main.temp;
     }
   }, function(res) {
     throw new Error(res.data.message);
   });
  }
}
