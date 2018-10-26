import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Title from "./components/Title";
import DayCard from "./components/DayCard";
import Day from "./components/Day";

import "./App.css";

class App extends Component {
  state = {
    lat: null,
    long: null
  };

  componentDidMount = async () => {
    await this.getLocation();
    this.getWeather();
  };

  getLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      });
    });
  };

  getWeather = () => {
    let { lat, long } = this.state;
    console.log(this.state.long);
    fetch(
      `https://www.metaweather.com/api/location/search/?lattlong=(${lat}),(${long})`
    )
      .then(res => res.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Title title="Atmos" />
          <Day />
          <DayCard />
        </div>
      </Router>
    );
  }
}

export default App;
