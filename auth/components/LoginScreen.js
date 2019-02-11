import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Root, Container, Content } from 'native-base';

import LoginHeader from './LoginHeader'
import EmailAndPasswordForm from './EmailAndPasswordForm'
import FacebookLoginButton from './FacebookLoginButton'
import LoginFooter from './LoginFooter'

export default class LoginScreen extends Component {
  state = {
    success: false,
    result: ''
  }
  render() {
    return (
        <Container>
          <StatusBar hidden />
          <LoginHeader/>
          <Content>
            <View>
              <EmailAndPasswordForm
                onSuccess={() => this.setState({result: 'Sucesso!', success: true})}
                onError={error => this.setState({result: `Erro! ${error}`, success: false})}/>
              <FacebookLoginButton
                onSuccess={() => this.setState({result: 'Sucesso!', success: true})}
                onError={error => this.setState({result: `Erro! ${error}`, success: false})}/>
            </View>
          </Content>
          <LoginFooter message={this.state.result} success={this.state.success}/>
        </Container>
    );
  }
}
