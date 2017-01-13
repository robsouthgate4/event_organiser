/* eslint-disable */

import { combineReducers } from "redux"

import tweets from "./tweetReducer"
import user from "./userReducer"
import events from "./eventReducer"

export default combineReducers({
	tweets,
	user,
	events
});
