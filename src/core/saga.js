import { all } from 'redux-saga/effects';
import ProjectSaga from './Project/ProjectSaga';
import MergeRequestSaga from './MergeRequest/MergeRequestSaga'

export default function* rootSaga() {
    yield all([
        ProjectSaga(),
        MergeRequestSaga(),
    ]);
}
