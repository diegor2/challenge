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
    newTask: false,
  }

  render() {
    return(
      <Container>
        {this._renderCreateTask()}
        <TodoListComponent/>
        <Fab onPress={this._toggleCreateTask}>
            <Icon name="add" />
        </Fab>
      </Container>
    )
  }

  _toggleCreateTask = () => this.setState({newTask: !this.state.newTask})
  _renderCreateTask = () => this.state.newTask ? <CreateTaskComponent/> : null
}
