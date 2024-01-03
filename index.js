/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import UserForm from './src/components/UserForm';
import Contacts from './src/components/Contacts';

AppRegistry.registerComponent(appName, () => Contacts);
