import React, { Component } from 'react';
import { View } from 'react-native';
import {  Header, Title, Left, Right, Body, Icon, Button } from 'native-base';

import { createUserWithEmail, loginWithEmail } from '../auth'

export default class LoginHeader extends Component {
  render(){
    return (
      <View>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Autenticação</Title>
          </Body>
          <Right />
        </Header>
      </View>
    )
  }
}
