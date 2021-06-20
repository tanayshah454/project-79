import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import { AppTabNavigator } from './components/AppTabNavigator';
import { createSwitchNavigator,createAppContainer } from 'react-navigation';

class App extends Component {

  render() {
    return (
      <AppContainer/>
    );
  }
}

const SwitchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator}
})
const AppContainer=createAppContainer(SwitchNavigator)
export default App;
