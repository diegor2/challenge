import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import initializeFirebase from './firebase/init'

export default class App extends React.Component {

  componentDidMount(){
    initializeFirebase()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
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
