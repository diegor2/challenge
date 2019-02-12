import React from 'react';
import { Root } from 'native-base';
import { StyleSheet, Text, View, YellowBox } from 'react-native';
import { AppLoading, Font } from 'expo';

import initializeFirebase from './firebase/init'
import AppContainer from './navigation/AppNavigator'

export default class App extends React.Component {

  state = {
    ready: false
  }

  render() {
    if(this.state.ready) {
      return (
          <AppContainer/>
      )
    } else {
      return (
        <AppLoading
          startAsync={this._init}
          onFinish={() => this.setState({ ready: true })}
          onError={console.warn} />
      )
    }
  }

  _init = async () => {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    initializeFirebase()

    // Suppress firebase warnings
    // https://github.com/firebase/firebase-js-sdk/issues/97
    YellowBox.ignoreWarnings(['Setting a timer']);
  }

}
