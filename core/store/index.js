import { createStore, compose , applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from "../reducers";
import rootSaga from '../saga'

// const persistedReducer = persistReducer(rootReducer)

const sagaMiddleware = createSagaMiddleware()

const config = () => {
    let storeConfig = createStore(
        rootReducer,
        {},
        composeWithDevTools(
            applyMiddleware(sagaMiddleware),
        )
    );

    sagaMiddleware.run(rootSaga)

    // let persistor = persistStore(store)

    // return { store, persistor }

    return storeConfig
};

const store = config();

export default store;
