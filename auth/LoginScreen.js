import React, { Component } from 'react';
import { StatusBar, Alert } from 'react-native';
import { Root, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Label, Toast } from 'native-base';

import FacebookLoginButton from './FacebookLoginButton'

export default class LoginScreen extends Component {
  render() {
    return (
      <Root>
        <Container>
          <StatusBar hidden />
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
          <Content>

            <Form>
              <Item stackedLabel>
                <Label>E-mail</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>Senha</Label>
                <Input />
              </Item>
              </Form>

            <Button iconLeft success
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}>
              <Icon name='mail' />
              <Text>Entrar usando e-mail</Text>
            </Button>

            <FacebookLoginButton
              onSuccess={() => {
                Toast.show({text: 'Sucesso!'})
              }}
              onError={error => {
                Toast.show({text: `Erro! ${error}`})
              }}
            />
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Root>
    );
  }
}
