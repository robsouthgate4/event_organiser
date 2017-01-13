//import axios from "axios";
import eventJSON from '../assets/events';

export function addEvent(event) {
	return {
		type: "ADD_EVENT",
		payload: {
			eventName: event.eventName,
			eventOwner: event.eventOwner,
			eventTime: event.eventTime,
			eventNotes: event.eventNotes,
			eventDate: event.eventDate,
		}
	}
}

export function removeEvent(index) {
	console.log(index);
	return {
		type: "REMOVE_EVENT",
		payload: index
	}
}

export function fetchEvents() {

	let events = eventJSON.events;

	return function(dispatch) {

		let failed = false;

		// Replicating an ajax call.

		// Start fetch
		setTimeout(() => {
			dispatch({type: "FETCH_EVENTS_START"});
		}, 200);

		setTimeout(() => {

			dispatch({type: "FETCH_EVENTS_FULLFILLED", payload: events});

			if (failed) {
				dispatch({type: "FETCH_EVENTS_REJECTED", payload: 'ERROR!!!!!!!!!'});
			}

		}, 500);

		// Real ajax call.

		// axios.get("./assets/events.json")
		// 	.then((response) => {
		// 		dispatch({type: "FETCH_EVENTS_FULLFILLED", payload: response.data});
		// 	})
		// 	.catch((err) => {
		// 		dispatch({type: "FETCH_EVENTS_REJECTED", payload: err});
		// 	})

	 }
}
