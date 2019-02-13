import React, { Component } from 'react';
import { Container, View, Fab, Icon, Item, Input } from 'native-base';
import { Keyboard } from 'react-native';

import CreateTaskComponent from '../components/CreateTaskComponent'
import TodoListComponent from '../components/TodoListComponent'

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
          <CreateTaskComponent/>
          <TodoListComponent/>
        <Fab onPress={this._create}>
            <Icon name="create" />
        </Fab>
      </Container>
    )
  }
}
