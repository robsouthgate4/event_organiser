/* eslint-disable */

import React from 'react';

export default class Calendar extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
	}

	render() {
		return 	<div className="row">
					<div className="col-md-4 col-md-offset-3">
						<form action="" className="search-form">
							<div className="form-group has-feedback pull-left">
								<label htmlFor="search" className="sr-only">Search</label>
								<input type="text"
									className="form-control"
									name="search"
									id="search"
									placeholder="search"
									onChange={this.handleChange} />
								<span className="glyphicon glyphicon-search form-control-feedback"></span>
							</div>
						</form>
					</div>
				</div>
	}
}
