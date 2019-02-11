import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';


import LoginHeader from './LoginHeader'
import EmailAndPasswordForm from './EmailAndPasswordForm'
import FacebookLoginButton from './FacebookLoginButton'

export default class LoginFooter extends Component {
  render() {
    if(this.props.message === ''){
      return null
    } else {
      return (
        <Footer>
          <FooterTab>
            <Button full
              success={this.props.success}
              danger={!this.props.success}>
              <Text>{this.props.message}</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    }
  }
}
