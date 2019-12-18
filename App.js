import React, {Component} from 'react';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import Home from './screen/Home';
import Contact from './screen/Contact';
import Paper from './screen/Paper';
import Full from './screen/Full';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';



const Screens = createMaterialTopTabNavigator(
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


const Appp = createAppContainer(Screens);

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}} forceInset={{bottom:'always', top:'always'}}>
        <Appp/>
      </SafeAreaView>
    );
  }
}

export default App;