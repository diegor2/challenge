import React, { Component, PureComponent } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Spinner } from 'native-base';

import { addTodo, watchTodoList, removeTodo } from '../repository'
import TodoListItem from './TodoListItem'

export default class TodoListComponent extends PureComponent {

  state = {
    todoList: [],
    ready : false
  }

  componentDidMount(){
    watchTodoList(list => this.setState({todoList: list, ready: true}))
  }

  render() {
    return this.state.ready ? (
        <FlatList
          data={this.state.todoList}
          keyExtractor={(item, index) => item.id}
          renderItem={this._renderItem} />
      ) : (
        <Spinner/>
      )
    }

  _renderItem = ({item}) => <TodoListItem item={item} onDelete={this._delete}/>

  _delete = id => removeTodo(id)

}
