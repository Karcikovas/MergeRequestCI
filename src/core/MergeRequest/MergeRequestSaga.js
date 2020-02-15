import { call, takeEvery, all, put } from 'redux-saga/effects'
import { constants } from '../constants'
import { endpoints } from '../config/endpoints'
import { startRequest } from '../Request/RequestSaga'
import { setMergeRequest, setMergeRequestStatus } from './MergeRequestActions'

export function* getMergeRequest(action) {
    const { id } = action.payload

    const { response, error } = yield call(
        startRequest,
        endpoints.GET_MERGE_REQUEST.name,
        endpoints.GET_MERGE_REQUEST.url.path(id),
        yield all(put(setMergeRequestStatus({ status: 'loading' })))
    )

    if (response) {
        yield all([
            put(setMergeRequest(response.data)),
            put(setMergeRequestStatus()),
        ])
    }

    if (error) {
        yield all([put(setMergeRequestStatus())])
    }
}

export default function* MergeRequestSaga() {
    yield all([takeEvery(constants.merge_request.GET, getMergeRequest)])
}
