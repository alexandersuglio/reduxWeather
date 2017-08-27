import {FETCH_WEATHER} from '../actions/index';


export default function(state = [], action) {
	// console.log('Action recieved', action);
	switch (action.type) {
		case FETCH_WEATHER:
		//add on to existing state 
		//return a new array!

	//instead of push, we'll concat to avoid mutating our state! 
	//we never want to manipulate our state in Redux! 
	//we want to create a new array
		return state.concat([action.payload.data]);


		// return [action.payload.data, ...state];
	}

return state;

}
