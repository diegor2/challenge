import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { addTodo, watchTodoList } from '../storage'

export default class TodoListComponent extends Component {

  constructor(props) {
    super(props);
    watchTodoList(list => this.setState({todoList: list}))
  }

  state = {
    todoList: []
  }


  render() {
    const list = this.state.todoList

    return (
      <View style={styles.container}>
        <FlatList
          data={list}
          keyExtractor={(item, index) => item.id}
          renderItem={this._renderItem} />
      </View>
    )
  }

  _renderItem = ({item}) => <Text style={styles.item}>{item.task}</Text>
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
