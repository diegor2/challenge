import React from 'react';
import { StyleSheet, Text, View, Root } from 'react-native';
import { AppLoading, Font } from 'expo';

import initializeFirebase from './firebase/init'
import LoginScreen from './auth/LoginScreen'

export default class App extends React.Component {

  state = {
    ready: false
  }

  render() {
    if(this.state.ready) {
      return (
        <LoginScreen/>
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
  }

}
