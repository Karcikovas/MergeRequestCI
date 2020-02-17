import { combineReducers } from 'redux'
import { RequestReducer } from './Request/RequestReducer'
import ProjecstReducer from './Project/ProjecstReducer'
import SettingsFormReducer from './SettingsForm/SettingsFormReducer'
import MergeRequestReducer from './MergeRequest/MergeRequestReducer'
import PerPageReducer from './SettingsForm/PerPage/PerPageReducer'
import ActiveProjectsReducer from './ActiveProjects/ActiveProjectsReducer'
import PageNumberReducer from './SettingsForm/PageNumber/PageNumberReducer'
import ProjectsStatusReducer from './Project/status/ProjectsStatusReducer'
import ProjectErrorsReducer from './Project/error/ProjectErrorsReducer'

const rootReducer = combineReducers({
    request: RequestReducer,
    mergeRequest: MergeRequestReducer,
    projects: combineReducers({
        available_projects: ProjecstReducer,
        status: ProjectsStatusReducer,
        error: ProjectErrorsReducer,
    }),
    active_projects: ActiveProjectsReducer,
    settings: combineReducers({
        per_page: PerPageReducer,
        page: PageNumberReducer,
        form: SettingsFormReducer,
    }),
})

export default rootReducer
