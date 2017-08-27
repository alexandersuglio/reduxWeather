import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.js';
import WeatherList from '../containers/weather-list.js';

export default class App extends Component {
  render() {
    return (
      // <div>React simple starter</div>
	<div>
    
      <SearchBar />
      <WeatherList />

     </div>
    );
  }
}