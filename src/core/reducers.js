import { combineReducers } from 'redux';
import { RequestReducer } from './Request/RequestReducer';
import ProjecstReducer from './Project/ProjecstReducer';
import SettingsFormReducer from './SettingsForm/SettingsFormReducer';
import MergeRequestReducer from './MergeRequest/MergeRequestReducer';

const rootReducer = combineReducers({
    request: RequestReducer,
    mergeRequest: MergeRequestReducer,
    projects: ProjecstReducer,
    settings: SettingsFormReducer,
})

export default rootReducer
