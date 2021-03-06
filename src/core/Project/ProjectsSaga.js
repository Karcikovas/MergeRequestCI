import { call, takeEvery, all, put } from 'redux-saga/effects'
import { constants } from '../constants'
import { endpoints } from '../config/endpoints'
import { startRequest } from '../Request/RequestSaga'
import { setProjects, setStatus, setError } from './ProjectsActions'


export function* getProject(action) {
    const { perPage, page } = action.payload

    const { response, error } = yield call(
        startRequest,
        endpoints.GET_PROJECTS.name,
        endpoints.GET_PROJECTS.url.path(perPage, page),
        yield all([put(setStatus(true))])
    )

    if (response) {
        yield all([put(setProjects(response.data)), put(setStatus(false))])
    }

    if (error && error.response) {
        yield all([put(setError(error)), put(setStatus(false))])
    }
}

export function* searchProject(action) {
    const { response, error } = yield call(
        startRequest,
        endpoints.SEARCH_PROJECT.name,
        endpoints.SEARCH_PROJECT.url.path(action.payload.name),
        yield all([put(setStatus(true))])
    )

    if (response) {
        yield all([put(setProjects(response.data)), put(setStatus(false))])
    }

    if(error && error.response) {
        yield all([put(setError(error)), put(setStatus(false))])
    }
}

export default function* ProjectsSaga() {
    yield all([
        takeEvery(constants.projects.GET, getProject),
        takeEvery(constants.projects.SEARCH, searchProject)
    ])
}
