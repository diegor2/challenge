import React, { Component, PureComponent } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { addTodo, watchTodoList, removeTodo } from '../storage'
import TodoListItem from './TodoListItem'

export default class TodoListComponent extends PureComponent {

  constructor(props) {
    super(props);
    watchTodoList(list => this.setState({todoList: list}))
  }

  state = {
    todoList: []
  }

  render() {
    return (
      <FlatList
        data={this.state.todoList}
        keyExtractor={(item, index) => item.id}
        renderItem={this._renderItem} />
    )
  }

  _renderItem = ({item}) => <TodoListItem item={item} onDelete={this._delete}/>

  _delete = id => removeTodo(id)

}
