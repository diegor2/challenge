import React, { Component, PureComponent } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { addTodo, watchTodoList } from '../storage'
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
      <View style={styles.container}>
        <FlatList
          data={this.state.todoList}
          keyExtractor={(item, index) => item.id}
          renderItem={this._renderItem} />
      </View>
    )
  }

  _renderItem = ({item}) => <TodoListItem title={item.task}/>

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  }
})
