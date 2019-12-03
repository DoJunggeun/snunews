import React from 'react';
import { ScrollView, TextInput, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screen/Home';
import Contact from './screen/Contact';
import Paper from './screen/Paper';
import Full from './screen/Full';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';



const App = createMaterialTopTabNavigator(
    {
      Home: {screen:Home,
        navigationOptions: () => ({
          title:'홈페이지'
      }),
    },
      Full: {screen:Full,
        navigationOptions: () => ({
          title:'전체기사'
      }),
  },
      Paper: {screen:Paper,
        navigationOptions: () => ({
          title:'지면보기'
      }),
    },
    Contact: {screen:Contact,
      navigationOptions: () => ({
        title:'기사제보'
      }),
}
},

{
  tabBarOptions: {
    tabStyle: {
      backgroundColor: "rgb(15,15,112)",
      height:'6%',
    },
    labelStyle: {
      fontSize:15,
      fontWeight:'400'
    },
    indicatorStyle :{
      color:'white'
    },
    showLabel: true
  },
  swipeEnabled: false,
  tabBarPosition:'bottom',
  }
);



export default createAppContainer(App);