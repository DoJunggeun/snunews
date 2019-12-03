import React, {Component}  from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { canGoBack: false };
      }
      rendor(){
      <View style={{height: 2*getStatusBarHeight(), justifyContent: 'space-evenly', alignItems:'center', flexDirection:'row', backgroundColor:'rgba(0, 0, 0, 0.08)' }}>
      <TouchableOpacity disabled={!this.state.canGoBack} onPress={this.onBack.bind(this)}>
      <Text style={[ {padding:10}, this.state.canGoBack ? {color:'black'} : {color:'gray'} ]}>뒤로가기</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={()=> {navigation.push("Home")}}>
          <Text style={{padding:10}}>홈페이지</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {navigation.push("Full")}}>
          <Text style={{padding:10}}>전체기사</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {navigation.push("Contact")}}>
          <Text style={{padding:10}}>기사제보</Text>
        </TouchableOpacity>
       </View>
       }
       onNavigationStateChange(navState) {
        this.setState({
          canGoBack: navState.canGoBack
        });
      }
      onBack = () => {
        if (this.state.canGoBack)
          this.refs[WEBVIEW_REF].goBack();
      }

}

export default Nav;