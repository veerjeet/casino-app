import { combineReducers,createStore,applyMiddleware,compose } from "redux";
import setBalance from "./reducers/setBalance";
import rootSaga from "./saga/rootSaga";
import createSagaMiddleware from "@redux-saga/core";

const reducers = combineReducers({
    setbalance:setBalance
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

//remove this after development
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware))

const store = createStore(reducers,enhancer);

sagaMiddleware.run(rootSaga);

export default store;