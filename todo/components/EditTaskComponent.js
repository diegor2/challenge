import React, { Component } from 'react';
import { Icon, Item, Input } from 'native-base';
import { Keyboard } from 'react-native';

import { editTodo } from '../repository'

export default class EditTaskComponent extends Component {

  state = {
    newTask: this.props.item.task,
  }

  render() {
    console.log('EditTaskComponent');
    return (
      <Item regular onBlur={this.props.onEditComplete}>
        <Input
          value={this.state.newTask}
          autoFocus={true}
          onSubmitEditing={this._edit}
          onChangeText={text => this.setState({newTask: text})} />
        <Icon
          active name='checkmark'
          onPress={this._edit} />
      </Item>
    )
  }

  _edit = () => {
    console.log('_edit', this.props.item.id, this.state.newTask);
    editTodo(this.props.item.id, this.state.newTask)
    Keyboard.dismiss()
    this.props.onEditComplete()
  }
}
