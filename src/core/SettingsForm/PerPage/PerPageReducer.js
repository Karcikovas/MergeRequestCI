import { constants } from '../../constants'
import { initialValues } from '../../config/constant/api'

const initialState = initialValues.perPage

const PerPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.settings.per_page.GET:
            return action.payload.number

        default:
            return state
    }
}

export default PerPageReducer
