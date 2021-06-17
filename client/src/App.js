import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Weather from './component/Weather';
import Movies from './component/Movies';
import React from 'react';
import axios from 'axios';
import Header from './component/Header';
import City from './component/City';
import Footer from './component/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locData: '',
      errMsg: '',
      displayErrMsg: false,
      displayMap: false,
      mapLink: '',
      weatherData: [],
      movieData:[],
    }
  }
  getLocation = async (event) => {
    event.preventDefault();
    let findLocation = event.target.searchLocation.value;
    try {
      let locUrl = `https://us1.locationiq.com/v1/search.php?key=pk.6609fd5454fe4ca80f3cbe836300bba0&q=${findLocation}&format=json`;
      let locResult = await axios.get(locUrl);
      let locationArray = locResult.data;
      console.log(locResult.data[0]);
      console.log(locationArray)
      let serverRoute = process.env.REACT_APP_SERVER;
      let weatherUrl = `${serverRoute}weather?cityname=${findLocation}`
      const weatherArray = await axios.get(weatherUrl);
      console.log(weatherArray)
      let serverRouteMov = process.env.REACT_APP_SERVER;
      let movieUrl=`${serverRouteMov}movies?cityname=${findLocation}`
      const movieArray= await axios.get(movieUrl);
      console.log(movieArray)
      this.setState(
        {
          locData: locResult.data[0],
          displayMap: true,
          mapLink: `https://maps.locationiq.com/v3/staticmap?key=pk.6609fd5454fe4ca80f3cbe836300bba0&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=14`,
          weatherData: weatherArray.data[0],
          movieData:movieArray.data[0]
        }
      )
    }
    catch {
      this.setState({
        errMsg: `Error 404 : Unable to geocode`,
        displayErrMsg: true,
      }
      )
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Form onSubmit={this.getLocation} >
          <Form.Control type="text" placeholder="Place Name!" name='searchLocation' onChange={this.update}/>
          <Button variant="primary" type="submit" value='search'>
            explore!
          </Button>
        </Form>
        <City
          city={this.state.locData.display_name}
          latitude={this.state.locData.lat}
          longitude={this.state.locData.lon}
          displayResults={this.state.displayMap}
          mapLink={this.state.mapLink}
        />
        <Weather
          weather={this.state.weatherData}
        />
        <Movies moives={this.state.movieData} />
        <Footer/>
      </div>

    )
  }
}

export default App;