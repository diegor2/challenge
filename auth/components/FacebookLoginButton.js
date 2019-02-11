import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';

import { loginWithFacebook } from '../auth'

export default class FacebookLoginButton extends Component {
  render(){
    return (
      <Button iconLeft full
        onPress={this._login}>
        <Icon name='logo-facebook' />
        <Text>Entrar com Facebook</Text>
      </Button>
    )
  }

  _login = () => {
    loginWithFacebook(
      {
        onSuccess: this.props.onSuccess,
        onError: this.props.onError,
      }
    )
  }
}
