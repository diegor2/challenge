import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Root, Container, Content, Toast } from 'native-base';

import LoginHeader from './LoginHeader'
import EmailAndPasswordForm from './EmailAndPasswordForm'
import FacebookLoginButton from './FacebookLoginButton'

export default class LoginScreen extends Component {
  // Should use Toast for both, in most cases it doesn't work with mail login.
  render() {
    return (
        <Container>
          <StatusBar hidden />
          <LoginHeader/>
            <Content>
              <View>
                  <EmailAndPasswordForm
                    onSuccess={() => alert('Sucesso!')}
                    onError={error => alert(`Erro! ${error}`)}/>
                  <FacebookLoginButton
                    onSuccess={() => Toast.show({text: 'Sucesso!', type: "success"})}
                    onError={error => Toast.show({text: `Erro! ${error}`, type: 'warning'})}/>
                </View>
            </Content>
        </Container>
    );
  }
}
