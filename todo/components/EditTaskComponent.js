import React, { Component } from 'react';
import { Icon, Item, Input } from 'native-base';
import { Keyboard, View } from 'react-native';

import { editTodo } from '../repository'

import TaskInputComponent from '../components/TaskInputComponent'

export default class EditTaskComponent extends Component {

  render() {
    const id = this.props.item.id
    return (
      <TaskInputComponent
        onComplete={this.props.onComplete}
        onCancel={this.props.onComplete}
        onSubmit={task => editTodo(id, task)}
        icon='checkmark' />
    )
  }  
}
