import { constants } from '../../constants'

const initialState = {}

const PageNumberReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.settings.page.SET:
            return action.payload

        default:
            return state
    }
}

export default PageNumberReducer
