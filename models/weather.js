const axios = require('axios');
require('dotenv').config();
const stolenData = {};

function getweather(req,res){
  const searchQuery = req.query.cityname;
  const KEY = process.env.WEATHER_API_KEY
  let url = `http://api.weatherbit.io/v2.0/forecast/daily?city=${searchQuery}&key=${KEY}`;

  axios.get(url).then(apiResult=>{
  const qaz=apiResult.data.data.map(item=>{
  return new ForeCast(item)
})
res.send(qaz)
  })
}

class ForeCast {
  constructor(object) {
      this.description = `Low of : ${object.low_temp} and a high of ${object.max_temp} with a ${object.weather.description} `
      this.date = object.valid_date;
  }
}

module.exports = getweather;