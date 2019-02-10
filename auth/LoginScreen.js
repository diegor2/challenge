import React, { Component } from 'react';
import { StatusBar, Alert } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Label } from 'native-base';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <StatusBar hidden />
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
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

          <Button iconLeft
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}>
            <Icon name='logo-facebook' />
            <Text>Entrar com Facebook</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
