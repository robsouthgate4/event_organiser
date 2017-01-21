/* eslint-disable */
import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from 'lodash';
import logo from './logo.svg';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

import AddEvent from './components/AddEvent';
import EventsList from './components/EventsList';
import SearchEvent from './components/SearchEvent';
import Calendar from './components/Calendar';

import { fetchUser } from "./actions/userActions";
import { addEvent, fetchEvents, removeEvent } from "./actions/eventActions";


// Map props to components
const mapStateToProps = function(store) {
	return {
		user: store.user.user,
		tweets: store.tweets.tweets,
		events: store.events.events,
		eventsFetching: store.events.fetching,
		eventsFetched: store.events.fetched
	};
}

class App extends Component {

	componentDidMount() {
		// Load our events from store
		this.props.dispatch(fetchEvents());
	}

	fetchEvents() {

	}

	render() {

		let addEventContainer;

		const { events, eventsFetching, eventsFetched } = this.props;

		if ( eventsFetching ) {
			return <p className="fetching">Fetching events....</p>
		}

		const mappedEvents = events.map((item, index) => {
			return <EventsList 
						whichItem={ index } 
						key={ index } 
						singleItem= { item } >
					</EventsList>
		});

		if ( eventsFetched ) {
			addEventContainer = <AddEvent></AddEvent>;
		}

		return (
			<div className="container">
				{ addEventContainer }
				<ul className="list-group">
					<ReactCSSTransitionGroup
						transitionName="example"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}>
						{ mappedEvents }
					</ReactCSSTransitionGroup>
				</ul>
				<Calendar></Calendar>
			</div>
		)
	}
}





export default connect(mapStateToProps)(App);
