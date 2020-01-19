import { constants } from '../constants'

const initialState = {}

export const RequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.request.STARTED:
            return action.payload.name

        case constants.request.ENDED:
            return action.payload.name

        default:
            return state
    }
}
