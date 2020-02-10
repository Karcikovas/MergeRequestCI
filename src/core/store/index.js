import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers.js'
import rootSaga from '../saga'

const persistConfig = {
    key: 'root',
    whitelist: 'active_projects',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()
export default function configureStore() {
    let store = createStore(
        persistedReducer,
        {},
        compose(
            applyMiddleware(sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )
    sagaMiddleware.run(rootSaga)

    let persistor = persistStore(store)

    return { store, persistor }
}
