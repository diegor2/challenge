import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Icon, Text, Form, Item, Input, Label } from 'native-base';

import { createUserWithEmail, loginWithEmail } from '../auth'

export default class EmailAndPasswordForm extends Component {

  state = {
    user: '',
    password: ''
  };

  render(){
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

          <Button iconLeft warning onPress={this._create}>
            <Icon name='person-add' />
            <Text>Criar conta usando e-mail e senha</Text>
          </Button>

          <Button iconLeft success onPress={this._login}>
            <Icon name='key' />
            <Text>Entrar usando e-mail e senha</Text>
          </Button>
        </View>
    )
  }

  _create = () => {
    createUserWithEmail(
      this.state.user,
      this.state.password,
      {
        onSuccess: this.props.onSuccess,
        onError: this.props.onError
      },
    )
  }

  _login = () => {
    loginWithEmail(
      this.state.user,
      this.state.password,
      {
        onSuccess: this.props.onSuccess,
        onError: this.props.onError
      },
    )
  }
}
