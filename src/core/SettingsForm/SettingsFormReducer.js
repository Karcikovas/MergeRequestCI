import { constants } from '../constants'

const initialState = {}

const SettingsFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.form.GET_PER_PAGE:
            return action.payload

        case constants.form.SAVE:
            return action.payload.data

        default:
            return state
    }
}

export default SettingsFormReducer
