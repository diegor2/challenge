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
    newTask: false
  }

  render() {
    return(
      <Container>
        {this._renderCreateTask()}
        <TodoListComponent/>
        {this._renderFab()}
      </Container>
    )
  }

  _enableCreateTask = (enable) => {
    console.log(`_enableCreateTask ${enable}`);
    this.setState({newTask: enable})
  }

  _renderFab = () => this.state.newTask ? null : (
    <Fab onPress={() => this._enableCreateTask(true)}>
        <Icon name="add" />
    </Fab>
  )

  _renderCreateTask = () => this.state.newTask ? (
    <CreateTaskComponent
      onComplete={() => this._enableCreateTask(false)}/>
   ) : null
}
