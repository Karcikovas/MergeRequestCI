import { Map } from 'immutable'
import { constants } from '../constants'

const initialState = Map({})

export const RequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.request.STARTED:
            return state.setIn([action.payload.name, 'loading'], true)

        case constants.request.ENDED:
            return state
                .setIn([action.payload.name, 'loading'], false)
                .setIn([action.payload.name, 'error'], action.payload.error)

        case constants.request.SET_ERROR:
            return state.setIn(
                [action.payload.name, 'error'],
                action.payload.error
            )

        default:
            return state
    }
}
