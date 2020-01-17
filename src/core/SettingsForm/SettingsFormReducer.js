import { constants } from '../constants'

const initialState = [];

const SettingsFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.form.SAVE:
            return [...state, action.payload.data]

        default:
            return state
    }
}

export default SettingsFormReducer
