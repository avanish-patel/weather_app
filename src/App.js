import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "daf555e096f4b9bcd56ca25fc3263744";

class App extends React.Component{

  // Make the json of values that we need using state object that has the values
  state = {
    temperature : undefined,
    city : undefined,
    country : undefined,
    humidity: undefined,
    description : undefined,
    error : undefined
  }

  // constructor(){
  // In orlder versions need to bind methods like this
  //   this.getWeather = this.getWeather.bind(this);
  // }

// Function that do get reqest on api call
  getWeather = async (e) => {
    // prevent page refresh on function execution
    e.preventDefault();

    // getting the values of city and country from input field in Form component
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // doing get
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // storing the data into data as json
    const data = await api_call.json();

    // check the value of city and country and set the values accordingly
    if(city && country){
      console.log(data);

      this.setState({
        temperature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        error : ''
      });

    }else{
      this.setState({
        temperature : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error : 'Please Enter the name of city and country.'
      });
    }
  }

  // render method, that render Title, Form and Weahter components
  render(){
    return(
      <div>

        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title/>
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    temperature = {this.state.temperature}
                    city = {this.state.city}
                    country = {this.state.country}
                    humidity = {this.state.humidity}
                    description = {this.state.description}
                    error = {this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;