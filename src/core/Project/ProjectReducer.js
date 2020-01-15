import { List } from 'immutable';
import { constants } from '../constants';

const initialState = List([]);

const ETicketReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.project.SET:
            return List.of(...state, action.payload)

        default:
            return state;
    }
};

export default ETicketReducer;
