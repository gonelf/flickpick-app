import React from 'react';

import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { HomeScreen, DetailsScreen, Login } from './components/pages';

const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
