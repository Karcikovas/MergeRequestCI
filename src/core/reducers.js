import { combineReducers } from 'redux'
import { RequestReducer } from './Request/RequestReducer'
import ProjecstReducer from './Project/ProjecstReducer'
import SettingsFormReducer from './SettingsForm/SettingsFormReducer'
import MergeRequestReducer from './MergeRequest/MergeRequestReducer'
import PerPageReducer from './SettingsForm/PerPage/PerPageReducer'
import MarkedProjectsReducer from './MarkedProjects/MarkedProjectsReducer'
import PageNumberReducer from './SettingsForm/PageNumber/PageNumberReducer'

const rootReducer = combineReducers({
    request: RequestReducer,
    mergeRequest: MergeRequestReducer,
    projects: ProjecstReducer,
    settings: combineReducers({
        per_page: PerPageReducer,
        page: PageNumberReducer,
        form: SettingsFormReducer,
        active_projects: MarkedProjectsReducer,
    }),
})

export default rootReducer
