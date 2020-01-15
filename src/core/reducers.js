import { combineReducers } from 'redux';
import { RequestReducer } from './Request/RequestReducer';
import ProjectReducer from './Project/ProjectReducer';
import SettingsFormReducer from './SettingsForm/SettingsFormReducer';

const rootReducer = combineReducers({
    request: RequestReducer,
    project: ProjectReducer,
    settings:SettingsFormReducer,
})

export default rootReducer;
