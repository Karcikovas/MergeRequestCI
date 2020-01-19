import { all } from 'redux-saga/effects'
import ProjectsSaga from './Project/ProjectsSaga'
import MergeRequestSaga from './MergeRequest/MergeRequestSaga'

export default function* rootSaga() {
    yield all([ProjectsSaga(), MergeRequestSaga()])
}
