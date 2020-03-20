import { constants } from '../constants'

const initialState = []

const MergeRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.merge_request.SET:
            return state.concat(action.payload.requests)

        default:
            return state
    }
}

export default MergeRequestReducer
