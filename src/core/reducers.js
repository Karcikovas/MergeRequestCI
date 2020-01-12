import { combineReducers } from 'redux';
import { RequestReducer } from './Request/RequestReducer';
import ProjectReducer from './Project/ProjectReducer';

const rootReducer = combineReducers({
    request: RequestReducer,
    project: ProjectReducer,
})

export default rootReducer;
