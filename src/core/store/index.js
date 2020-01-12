import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers.js';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware()
export default function configureStore() {

    const store = createStore(
        rootReducer,
        {},
        compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )

    sagaMiddleware.run(rootSaga)

    return store
}
