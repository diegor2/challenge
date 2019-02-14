import React, { Component } from 'react';
import { Icon, Item, Input } from 'native-base';
import { Keyboard } from 'react-native';

import { addTodo } from '../repository'

export default class CreateTaskComponent extends Component {

  state = {
    newTask: '',
  }

  render() {
    return (
      <Item regular>
      <Input
      value={this.state.newTask}
      placeholder='Nova tarefa'
      onChangeText={text => this.setState({newTask:text})} />
      <Icon
      active name='add-circle'
      onPress={this._create} />
      </Item>
    )
  }

  _create = () => {
    addTodo(this.state.newTask)
    this.setState({newTask: ''})
    Keyboard.dismiss()
  }
}
