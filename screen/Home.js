import React, {Component} from 'react';
import { Image, View, Text, TouchableOpacity} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { WebView } from 'react-native-webview';
import {SafeAreaView} from 'react-navigation'

const WEBVIEW_REF = "WEBVIEW_REF";


class Home extends Component { 
    constructor(props) {
        super(props);
        this.state = { canGoBack: -1, canGoNext : 0, temp : 0 };
      }
    
    render() {
        const {navigation} = this.props;
        return ( 
          <View style={{flex:1}}>
          <WebView source={{ uri: 'http://www.snunews.com/' }} ref={WEBVIEW_REF} onLoadStart={this.onNavigationStateChange.bind(this)} bounces='false'/>
            <TouchableOpacity  style = {{position:'absolute', left:12, bottom:40, width:40, height:40}} onPress={this.onBack.bind(this)}>
              <Image source={require('./lib/back.png')} style={[{width:40, height:40 }, this.state.canGoBack>= 1 ? {opacity:0.8} : {opacity:0.05}]} />
            </TouchableOpacity>
            <TouchableOpacity  style = {{position:'absolute', left:57, bottom:40, width:40, height:40}} onPress={this.goNext.bind(this)}>
              <Image source={require('./lib/next.png')} style={[{opacity:0.9, width:40, height:40 }, this.state.canGoNext>= 1 ? {opacity:0.8} : {opacity:0.05}]} />
            </TouchableOpacity>
        </View>
            );
    }
    onNavigationStateChange = () => {
        this.setState({
          canGoBack: this.state.canGoBack+1,
          canGoNext: 0
        }, () => {
          this.setState({
            canGoNext : this.state.temp,
            temp : 0
          });
        }
        );
    }
      onBack = () => {
        if (this.state.canGoBack>=1) {
          this.refs[WEBVIEW_REF].goBack();
          this.setState({
            canGoBack: this.state.canGoBack-2,
            temp: this.state.canGoNext+1,
          }
          );
          } 
      }
      goNext = () => {
        if (this.state.canGoNext >= 1) {
        this.refs[WEBVIEW_REF].goForward();
        this.setState({
          canGoBack: this.state.canGoBack,
          temp: this.state.canGoNext-1,
        });
      }}

}

export default Home;

