import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const tron = Reactotron.configure({name: 'LinxTemplateRN'})
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

console.tron = tron;

tron.clear();
export default tron;
