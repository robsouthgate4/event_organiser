/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { removeEvent } from '../actions/eventActions';

// Map props to components
const mapStateToProps = function(store) {
	return {
		events: store.events.events
	};
}
class EventsList extends React.Component {

	constructor(props) {
		super(props);
	}

	handleDelete() {
		this.props.dispatch(removeEvent(this.props.whichItem));
	}

	render() {
		return <li className="list-group-item">
					<h4 className="list-group-item-heading">{this.props.singleItem.eventName}</h4>
					<p className="list-group-item-text">{this.props.singleItem.eventNotes}</p>
					<p className="list-group-item-text">{this.props.singleItem.eventDate}</p>
					<span className="glyphicon glyphicon-remove remove-event-btn" onClick={this.handleDelete.bind(this)}></span>
				</li>
	}
}

export default connect(mapStateToProps)(EventsList);
