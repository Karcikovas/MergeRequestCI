import { constants } from '../constants'

const initialState = [];

const ETicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.project.SET:
            return action.payload.project;

        default:
            return state;
    }
}

export default ETicketReducer
