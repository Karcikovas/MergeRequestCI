import { combineReducers } from 'redux';
import { RequestReducer } from './Request/RequestReducer';
import ProjecstReducer from './Project/ProjecstReducer';
import SettingsFormReducer from './SettingsForm/SettingsFormReducer';
import MergeRequestReducer from './MergeRequest/MergeRequestReducer';
import PerPageReducer from './SettingsForm/PerPage/PerPageReducer';
import MarkedProjectsReducer from './MarkedProjects/MarkedProjectsReducer';

const rootReducer = combineReducers({
    request: RequestReducer,
    mergeRequest: MergeRequestReducer,
    projects: ProjecstReducer,
    settings: combineReducers({
        pages_number: PerPageReducer,
        settings: SettingsFormReducer,
        active_projects: MarkedProjectsReducer,
    })
})

export default rootReducer
