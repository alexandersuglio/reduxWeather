import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/googlemap.js';

 class WeatherList extends Component {
	


renderWeather(cityData){

const name = cityData.city.name;
const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 9/5 -459.67);

const pressure = cityData.list.map(weather => weather.main.pressure);
const humidity = cityData.list.map(weather => weather.main.humidity);

const lon = cityData.city.coord.lon;
console.log(lon);
const lat = cityData.city.coord.lat;
console.log(lat);

return(


<tr key={name}>
	<td><GoogleMap lon={lon} lat={lat} /> </td>

	<td><Chart data={temps} units="°F" color='Orange' /></td>
	<td><Chart data={pressure} units="hPa" color='Blue' /></td>
	<td><Chart data={humidity} units="%" color='Green' /></td>
</tr>


	);
}



render() {

return(
<table className="table table-hover">
	<thead>
		<tr><th> City </th>
			<th> Temperature (°F) </th>
			<th> Pressure (hPa) </th>
			<th> Humidity (%) </th>
		</tr>
	</thead>
	<tbody>
		{this.props.weather.map(this.renderWeather)}
	</tbody>
</table>
		);
	}
}

function mapStateToProps({weather}){
return {weather: weather};

}
//EXACTLY THE SAME AS
// function mapStateToProps(state){
// return {weather: state.weather};
// }


export default connect(mapStateToProps)(WeatherList);