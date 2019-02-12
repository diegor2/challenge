import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';
import { Button, Icon, Text, Form, Item, Input, Label } from 'native-base';

import { createUserWithEmail, loginWithEmail } from '../auth'

export default class EmailAndPasswordButtons extends Component {

  render(){
    return (
      <View>
          <Button iconLeft full warning onPress={this._create}>
            <Icon name='person-add' />
            <Text>Criar conta usando e-mail e senha</Text>
          </Button>
          <Button iconLeft full success onPress={this._login}>
            <Icon name='key' />
            <Text>Entrar usando e-mail e senha</Text>
          </Button>
        </View>
    )
  }

  _create = () => {
    this.props.navigation.navigate('LoginForm', {mode: 'create'})
  }

  _login = () => {
    this.props.navigation.navigate('LoginForm', {mode: 'login'})
  }
}
