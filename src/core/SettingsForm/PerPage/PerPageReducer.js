import { constants } from '../../constants'

const initialState = ''

const PerPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.settings.per_page.GET:
            return action.payload.number

        default:
            return state
    }
}

export default PerPageReducer
