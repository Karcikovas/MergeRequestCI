import { List } from 'immutable';
import { constants } from '../constants';

const initialState = List([]);

const SettingsFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.form.SAVE:
            return List.of(...state, action.payload.data);

        default:
            return state;
    }
};

export default SettingsFormReducer;
