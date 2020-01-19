import { call, takeEvery, all, put } from 'redux-saga/effects'
import { constants } from '../constants'
import { endpoints } from '../config/endpoints'
import { startRequest } from '../Request/RequestSaga'
import { setProjects } from './ProjectsActions'

export function* getProject() {
    const { response } = yield call(
        startRequest,
        endpoints.GET_PROJECTS.name,
        endpoints.GET_PROJECTS.url.path()
    )

    if (response) {
        yield all([put(setProjects(response.data))])
    }
}

export default function* ProjectsSaga() {
    yield all([takeEvery(constants.projects.GET, getProject)])
}