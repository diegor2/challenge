import React, { PureComponent } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class TodoListItem extends PureComponent {
  // _onPress = () => {
  //   this.props.onPressItem(this.props.id);
  // };

  render() {
    // const textColor = this.props.selected ? 'red' : 'black';
    return (
      <TouchableOpacity>
        <View>
          <Text style={styles.item}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
