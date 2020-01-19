import { call, takeEvery, all, put } from 'redux-saga/effects'
import { constants } from '../constants'
import { endpoints } from '../config/endpoints'
import { startRequest } from '../Request/RequestSaga'
import { setMergeRequest } from './MergeRequestActions'

export function* getMergeRequest(action) {
    const { id } = action.payload

    const { response } = yield call(
        startRequest,
        endpoints.GET_MERGE_REQUEST.name,
        endpoints.GET_MERGE_REQUEST.url.path(id)
    )

    if (response) {
        yield all([put(setMergeRequest(response.data))])
    }
}

export default function* MergeRequestSaga() {
    yield all([takeEvery(constants.merge_request.GET, getMergeRequest)])
}
