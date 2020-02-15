import { constants } from '../../constants'
import {initialValues} from '../../config/constant/api'

const initialState = initialValues.pageNumber

const PageNumberReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.settings.page.SET:
            return action.payload.pageNumber

        default:
            return state
    }
}

export default PageNumberReducer
