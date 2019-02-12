import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';
import { Button, Icon, Text, Form, Item, Input, Label } from 'native-base';

import { createUserWithEmail, loginWithEmail } from '../auth'

export default class EmailAndPasswordForm extends Component {

  state = {
    user: '',
    password: '',
  };

  render(){
    const mode = this.props.navigation.getParam('mode', '');

    return (
      <View>
          <Form>
            <Item stackedLabel>
              <Label>E-mail</Label>
              <Input onChangeText={text => this.setState({user:text})} />
            </Item>
            <Item stackedLabel last>
              <Label>Senha</Label>
              <Input
                secureTextEntry={true}
                onChangeText={text => this.setState({password:text})} />
            </Item>
          </Form>

          <Button iconLeft full success
            onPress={(mode === 'create') ? this._create : this._login}>
            <Icon name='checkmark' />
            <Text>{(mode === 'create') ? 'Criar' : 'Entrar'}</Text>
          </Button>
        </View>
    )
  }

  _create = () => {
    const {user, password} = this.state
    Keyboard.dismiss()
    createUserWithEmail(user, password, {
        onSuccess: this._login,
        onError: this.props.onError
      },
    )
  }

  _login = () => {
    const {user, password} = this.state
    Keyboard.dismiss()
    loginWithEmail(user, password, {
        onSuccess: this.props.onSuccess,
        onError: this.props.onError
      },
    )
  }
}
