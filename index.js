/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import UserForm from './src/components/UserForm';

AppRegistry.registerComponent(appName, () => UserForm);
