import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './screens/home';
import SingleGig from './screens/singleGig/index';

const App = createStackNavigator({
  Home: { screen: Home },
  SingleGig: { screen: SingleGig }
}, {
  headerMode: 'none',
  initialRouteName: 'Home'
})


export default createAppContainer(App);
