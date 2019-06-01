import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './screens/home';
import SingleGig from './screens/singleGig';
import NewGig from './screens/newGig';

const App = createStackNavigator({
  Home: { screen: Home },
  SingleGig: { screen: SingleGig },
  NewGig: { screen: NewGig }
}, {
  headerMode: 'none',
  initialRouteName: 'Home'
})


export default createAppContainer(App);
