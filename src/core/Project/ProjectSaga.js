import { call, takeEvery, all, put } from 'redux-saga/effects'
import { constants } from '../constants'
import { endpoints } from '../config/endpoints'
import { startRequest } from '../Request/RequestSaga'
import { setProject } from './ProjectActions'

export function* getProject(action) {
    const { id } = action.payload

    const { response } = yield call(
        startRequest,
        endpoints.GET_PROJECT.name,
        endpoints.GET_PROJECT.url.path(id)
    )

    if (response) {
        yield all([put(setProject(response.data))])
    }
}

export default function* ProjectSaga() {
    yield all([takeEvery(constants.project.GET, getProject)])
}
