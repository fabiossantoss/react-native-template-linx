import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-native';

import reducers from './ducks';
import sagas from './sagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middleware = [sagaMiddleware];

const createAppropriateStore = __DEV__ ? Reactotron.createStore : createStore;
// const createAppropriateStore = __DEV__ ? createStore : createStore;

const store = createAppropriateStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(sagas);
export default store;
