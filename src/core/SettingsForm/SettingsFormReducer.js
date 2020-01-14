import { List } from 'immutable';
import { constants } from '../constants';

const initialState = List([]);

const SettingsFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.form.SAVE:
            return List.of(action.payload);

        default:
            return state;
    }
};

export default SettingsFormReducer;
