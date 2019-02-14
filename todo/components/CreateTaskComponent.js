import React, { Component } from 'react';

import { addTodo } from '../repository'

import TaskInputComponent from '../components/TaskInputComponent'

export default class CreateTaskComponent extends Component {

  render() {
    return (
      <TaskInputComponent
        onComplete={this.props.onComplete}
        onCancel={this.props.onComplete}
        placeholder='Nova tarefa'
        onSubmit={addTodo}
        icon='add-circle' />
    )
  }
}
