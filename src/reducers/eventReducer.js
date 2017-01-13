/* eslint-disable */
import lodash from 'lodash';

export default function reducer(state = {
	events: [],
	fetching: false,
	fetched: false,
	error: null
}, action) {
	switch(action.type) {
		case  "ADD_EVENT" :
			return {
				...state,
				events: [...state.events, action.payload]
			}
			break;
		case  "REMOVE_EVENT" :
			return {
				...state,
				events: state.events.filter( (item, index) => index !== action.payload )
			}
			break;
		case  "FETCH_EVENTS_START" :
			return {
				...state,
				fetching: true
			}
			break;
		case  "FETCH_EVENTS_FULLFILLED" :
			return {
				...state,
				events: action.payload,
				fetched: true,
				fetching: false
			}
			break;
		case  "FETCH_EVENTS_REJECTED" :
			return {
				...state,
				error: action.payload,
				fetching: false
			}
			break;
	}
	return state;
}
