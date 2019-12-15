import {applyMiddleware, createStore, compose} from 'redux';

import {persistStore, persistReducer} from 'redux-persist'
import {createLogger} from 'redux-logger'

import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import rootSaga from './saga'
import rootReducer from './reducer'

//import {middleware as beesMiddleware} from 'redux-bees';

import {routerMiddleware} from 'connected-react-router'
import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = (initialState = {}) => {
    const store = createStore(
        persistedReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                middleware,
                sagaMiddleware,
                //beesMiddleware(),
                createLogger()
            )
        )
    );
    let persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return {store, persistor}
};

export const storeConfig = configureStore();