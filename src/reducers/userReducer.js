/* eslint-disable */
export default function reducer(state = {
	user: {
		id: null,
		name: null,
		age: null
	}
}, action) {
	switch (action.type) {
		case "FETCH_USER_FULFILLED" :
			return {
				...state,
				user: action.payload
			}
			break;
	}
	return state
}
