import React, {Component} from 'react';
import { Image, View, Text, TouchableOpacity} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { WebView } from 'react-native-webview';
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationActions } from 'react-navigation';

const WEBVIEW_REF = "WEBVIEW_REF";


class Paper extends Component {
  constructor(props) {
    super(props);
    this.state = { canGoBack: false };
  }

    render() {
        const {navigation} = this.props;
        return (
    <View style={{flex:1}}>
      <View style={{height:getStatusBarHeight()}}/>
      <View style={{flex:1}}>
      <WebView source={{ uri: 'http://www.snunews.com/com/jb.html/' }} ref={WEBVIEW_REF} onNavigationStateChange={this.onNavigationStateChange.bind(this)} bounces='false'/>
      <TouchableOpacity  style = {{position:'absolute', left:12, bottom:40, width:40, height:40}} onPress={this.onBack.bind(this)}>
          <Image source={require('./lib/back.png')} style={[{opacity:0.9, width:40, height:40 }, this.state.canGoBack ? {display:'flex'} : {display:'none'}]} />
        </TouchableOpacity>
          </View>
    </View>


        );
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

export default Paper;

