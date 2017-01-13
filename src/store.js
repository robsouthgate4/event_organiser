import { applyMiddleware, createStore, compose } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // For redux dev tools usage
const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, composeEnhancers(
	middleware
));
