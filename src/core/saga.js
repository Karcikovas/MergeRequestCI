import { all } from 'redux-saga/effects';
import ProjectSaga from './Project/ProjectSaga'

export default function* rootSaga() {
    yield all([
        ProjectSaga(),
    ]);
}
