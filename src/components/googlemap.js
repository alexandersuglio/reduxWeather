import React, {Component} from 'react';

class GoogleMap extends Component {

componentDidMount(){

//create an embedded google map
//common way to work with 3rd party libraries work with react

new google.maps.Map(this.refs.map, {
	zoom: 12,
	center: {
		lat: this.props.lat,
		lng: this.props.lon 
	}
});

}

render(){
	// ths.refs.map
	return <div ref="map" />;
}


}

export default GoogleMap;