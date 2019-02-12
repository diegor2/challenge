import React, { Component } from 'react';
import { Root } from "native-base";
import { StatusBar, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginButtonsScreen from '../auth/screen/LoginButtonsScreen'
import LoginFormScreen from '../auth/screen/LoginFormScreen'
import TodoListScreen from '../todo/screen/TodoListScreen'
import TodoDetailsScreen from '../todo/screen/TodoDetailsScreen'

const AppNavigator = createStackNavigator(
  {
    LoginButtons: LoginButtonsScreen,
    LoginForm: LoginFormScreen,
    TodoList: TodoListScreen,
    TodoDetails: TodoDetailsScreen
  },
  {
    initialRouteName: 'LoginButtons',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <StatusBar hidden />
    <AppContainer />
  </Root>
