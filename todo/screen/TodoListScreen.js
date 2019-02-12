import React, { Component } from 'react';
import { Container, View, Fab, Icon, Item, Input } from 'native-base';
import { Keyboard } from 'react-native';

import CreateTaskComponent from '../components/CreateTaskComponent'

export default class TodoListScreen extends Component {

  static navigationOptions = {
    title: 'Lista de Tarefas',
  }

  state = {
    newTask: '',
  }

  render() {
    return(
      <Container>
        <View>
          <CreateTaskComponent/>
        </View>
        <Fab onPress={this._create}>
            <Icon name="create" />
        </Fab>
      </Container>
    )
  }
}
