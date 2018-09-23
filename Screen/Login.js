import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import navigate from 'react-navigation';


export default class Login extends React.Component {
  
  state = { email: '', password: '', errorMessage: null }
  handleLogin () {
    this.props.navigation.navigate('Home')
  }
  /*
    handleLogin = () => {
      const { email, password } = this.state
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Main'))
        .catch(error => this.setState({ errorMessage: error.message }))
    }
  */
    
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={Styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={Styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={Styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" 
        onPress={() => this.props.navigation.navigate('Home')}/*{this.handleLogin}*/ />
        <Button
          title="Eres nuevo? Registrate"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})