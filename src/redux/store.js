import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import logger from 'redux-logger'
import rootSaga from './sagas'
const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
)
sagaMiddleware.run(rootSaga)