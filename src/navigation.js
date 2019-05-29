import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './screens/home';


const App = createStackNavigator({
  Home: { screen: Home }
}, {
  headerMode: 'none',
  initialRouteName: 'Home'
})


export default createAppContainer(App);
