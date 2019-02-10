import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import initializeFirebase from 'firebase/init'
import LoginScreen from './auth/LoginScreen'

export default class App extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  componentDidMount(){
  //  initializeFirebase()
  }
  render() {
    return (
      <LoginScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
