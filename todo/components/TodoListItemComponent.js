import React, { PureComponent } from 'react';
// import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button } from 'native-base';

export default class TodoListItemComponent extends PureComponent {
  render() {
    return (
      <ListItem onPress={this.props.onPress}>
        <Left>
          <Text>{this.props.item.task}</Text>
        </Left>
        <Right>
          <Icon active name="trash"
            onPress={() => this.props.onDelete(this.props.item.id)}/>
        </Right>
      </ListItem>
    );
  }
}
