import React, { Component } from 'react';
import { Icon, Item, Input } from 'native-base';
import { Keyboard, View } from 'react-native';

import { editTodo } from '../repository'

export default class TaskInputComponent extends Component {

  state = {
    newTask: (this.props.item) ? this.props.item.task : ''
  }

  render() {
    return (
      <View onBlur={this.props.onCancel}>
        <Item regular>
          <Input
            value={this.state.newTask}
            autoFocus={true}
            placeholder={this.props.placeholder}
            onSubmitEditing={this._submit}
            onChangeText={text => this.setState({newTask: text})} />
          <Icon
            active name={this.props.icon}
            onPress={this._submit} />
        </Item>
      </View>
    )
  }

  _submit = () => {
    console.log('_submit');
    this.props.onSubmit(this.state.newTask)
    Keyboard.dismiss()
    this.props.onComplete()
  }
}
