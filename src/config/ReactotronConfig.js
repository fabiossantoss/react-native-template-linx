import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';

let tron = null;

if (__DEV__) {
  tron = Reactotron.configure()
    .useReactNative()
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}

export default tron;
