import React, { Component } from 'react';
import { Root, Container, Content, View, Button, Text } from 'native-base';

import EmailAndPasswordButtons from '../components/EmailAndPasswordButtons'
import FacebookLoginButton from '../components/FacebookLoginButton'
import LoginFooter from '../components/LoginFooter'

export default class LoginButtonsScreen extends Component {

  static navigationOptions = {
    title: 'Desafio React Native',
  }

  state = {
    success: false,
    result: ''
  }

  render() {
    return (
        <Container>
          <Content>
            <View>
              <EmailAndPasswordButtons navigation={this.props.navigation}/>
              <FacebookLoginButton
                onSuccess={() => this.props.navigation.navigate('TodoList')}
                onError={error => this.setState({result: `Erro! ${error}`, success: false})}/>
              </View>
          </Content>
          <LoginFooter message={this.state.result} success={this.state.success}/>
        </Container>
    );
  }
}
