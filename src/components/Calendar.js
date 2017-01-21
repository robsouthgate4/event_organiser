/* eslint-disable */
import React from 'react';
import lodash from 'lodash';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';


BigCalendar.setLocalizer(
	BigCalendar.momentLocalizer(moment)
);

export default class Calendar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const tempEvents = [
			{
				"startDate": new Date(),
				"title": "text goes here"
			}
		]
		return (
			<div ref="calendar">
				<BigCalendar
					events={ tempEvents }
					defaultDate={new Date()}>
				</BigCalendar>
			</div>
		)
	}
}
