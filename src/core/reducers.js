import { combineReducers } from 'redux';
import { RequestReducer } from './Request/RequestReducer';
import ProjectReducer from './Project/ProjectReducer';
import SettingsFormReducer from './SettingsForm/SettingsFormReducer';
import MergeRequestReducer from './MergeRequest/MergeRequestReducer';

const rootReducer = combineReducers({
    request: RequestReducer,
    mergeRequest: MergeRequestReducer,
    project: ProjectReducer,
    settings: SettingsFormReducer,
})

export default rootReducer
