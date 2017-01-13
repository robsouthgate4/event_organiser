/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addEvent } from '../actions/eventActions';


// Map props to components
const mapStateToProps = function(store) {
	return {
		events: store.events.events
	};
}

class AddEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle : false
		}
	}

	handleSubmit(event) {
		let tempEvent = {
			eventName: ReactDOM.findDOMNode(this.refs.inputEventName).value,
			ownerName: ReactDOM.findDOMNode(this.refs.inputEventOwner).value,
			eventDate: ReactDOM.findDOMNode(this.refs.inputEventDate).value,
			eventTime: ReactDOM.findDOMNode(this.refs.inputEventTime).value,
			eventNotes: ReactDOM.findDOMNode(this.refs.inputEventNotes).value
		}
		this.props.dispatch(addEvent(tempEvent));
		this.setState({
			toggle: false
		})
		event.preventDefault();
	}

	handleToggle() {
		let tempToggle = this.state.toggle;
		this.setState({
			toggle: !tempToggle
		})
	}

	handleIncrement() {

	}

	render() {

		let StyleObj = {
			top: this.state.toggle ? '62px' : '-400px',
			WebkitTransition: 'top .7s ease',
			MozTransition: 'top .7s ease'
		}

		// Toggle show / hide icon
		let plusMinus = this.state.toggle ? <span className="glyphicon glyphicon-minus"></span> : <span className="glyphicon glyphicon-plus"></span>;


		return (
			<div className="add-event-wrapper">
				<div className="panel panel-primary">
					<div className="panel-heading apt-addheading" onClick={ this.handleToggle.bind(this) }>
						{ plusMinus } Add Event</div>
						<div style={ StyleObj } className="panel-body">
						<form onSubmit={ this.handleSubmit.bind(this) } className="add-Event form-horizontal">
							<div className="form-group">
								<label className="col-sm-2 control-label" htmlFor="eventName">Event Name</label>
								<div className="col-sm-10">
								<input type="text" className="form-control"
									id="eventName" ref="inputEventName" placeholder="Events Name" />
								</div>
							</div>
							<div className="form-group">
								<label className="col-sm-2 control-label" htmlFor="eventOwner">Event Owner</label>
								<div className="col-sm-10">
								<input type="text" className="form-control"
									id="eventOwner" ref="inputEventOwner" placeholder="Owner's Name" />
								</div>
							</div>
							<div className="form-group">
								<label className="col-sm-2 control-label" htmlFor="eventDate">Date</label>
								<div className="col-sm-4">
								<input type="date" className="form-control"
									id="eventDate" ref="inputEventDate" />
								</div>
								<label className="col-sm-2 control-label" htmlFor="eventTime">Time</label>
								<div className="col-sm-4">
								<input type="time" className="form-control"
									id="eventTime" ref="inputEventTime" />
								</div>

							</div>
							<div className="form-group">
								<label className="col-sm-2 control-label" htmlFor="eventNotes">Event. Notes</label>
								<div className="col-sm-10">
								<textarea className="form-control" rows="4" cols="50"
									id="eventNotes" ref="inputEventNotes" placeholder="Event Notes"></textarea>
								</div>
							</div>
							<div className="form-group">
								<div className="col-sm-offset-2 col-sm-10">
								<button type="submit" className="btn btn-primary pull-right">Add Event</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(AddEvent);
