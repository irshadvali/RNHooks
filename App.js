import React, { Component } from 'react';
import { View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from "./src/HomeScreen"

const MainNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },

});

// const App = createAppContainer(MainNavigator);
const AppContainer = createAppContainer(MainNavigator);
class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
     
        <View style={{ flex: 1 }}>
          <AppContainer />
        </View>
      
    );
  }
}
export default App;