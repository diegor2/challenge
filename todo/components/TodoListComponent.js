import React, { Component, PureComponent } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Spinner } from 'native-base';

import { addTodo, watchTodoList, removeTodo } from '../repository'
import TodoListItemComponent from './TodoListItemComponent'
import EditTaskComponent from './EditTaskComponent'

export default class TodoListComponent extends PureComponent {

  state = {
    todoList: [],
    ready : false,
    editingItemId: null
  }

  componentDidMount(){
    // reverse order so the newer items are higher on the list
    watchTodoList(list => this.setState({todoList: list.reverse(), ready: true}))
  }

  render() {
    return this.state.ready ? (
        <FlatList
          data={this.state.todoList}
          extraData={this.state}
          keyExtractor={(item, index) => item.id}
          renderItem={this._renderItem} />
      ) : (
        <Spinner/>
      )
    }

  _onItemPress = key => {
    console.log(`_onItemPress ${key}`)
    this.setState({editingItemId: key})
  }

  _onEditComplete = () => {
    this.setState({editingItemId: null})
  }

  _renderItem = ({item}) => (item.id === this.state.editingItemId) ?
      this._renderEditItem(item) : this._renderViewItem(item)

  _renderEditItem = item =>
    <EditTaskComponent
      item={item}
      onDelete={this._delete}
      onComplete={this._onEditComplete}/>


  _renderViewItem = item =>
    <TodoListItemComponent
      item={item}
      onDelete={this._delete}
      onPress={() => this._onItemPress(item.id)}/>


  _delete = id => removeTodo(id)

}
