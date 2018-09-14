import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';


console.disableYellowBox = true; 

const RooStack =  createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
})

export default class App extends React.Component {
  render() {
    return <RooStack />
  }
}

