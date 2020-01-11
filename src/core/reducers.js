import { combineReducers } from 'redux';
import {
    loadingReducer,
    reposReducer,
    titleReducer,
    pullRequestsReducer,
    failedReposReducer,
    errorReducer,
    sortOptionsReducer,
} from './reducers/index.js'

const rootReducer = combineReducers({
    pullRequests: pullRequestsReducer,
    repos: reposReducer,
    failedRepos: failedReposReducer,
    loading: loadingReducer,
    error: errorReducer,
    title: titleReducer,
    sortOptions: sortOptionsReducer,
})

export default rootReducer;
