import React, { Component } from 'react';
import { Toast} from 'native-base';

import EmailAndPasswordForm from '../components/EmailAndPasswordForm'

export default class LoginFormScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const mode = navigation.getParam('mode', '');
    return {
      title: (mode === 'create') ?
        'Criar nova conta' :
        'Entrar com email e senha'
    }
  }


  render() {
    return (
      <EmailAndPasswordForm
        navigation={this.props.navigation}
        onSuccess={() => this.props.navigation.navigate('TodoList')}
        onError={error => Toast.show({text: `Erro! ${error}`})} />
    )
  }
}
