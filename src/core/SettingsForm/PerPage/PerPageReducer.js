import { constants } from '../../constants';

const initialState = {}

const PerPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.settings.pages_number.GET:
            return action.payload

        default:
            return state
    }
}

export default PerPageReducer
