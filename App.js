import React from 'react';
import { Text, View, StyleSheet , Button , TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';


class HomeScreen extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  render() {
    return (
      <View >
      <View style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'stretch'}} >
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title= "Privados"
        />
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title= "Mis Posts"
        />
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title= "Mis Friendos"
        />
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title= "Perfil"
        />
      </View>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title= "DrawerOpen"
        />
        
      </View>

      <View>

      </View>

      </View>
      

    );
  }
}


class ProfileScreen extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  render() {

    return (
      <View style={Styles.container}>
        <Text>Login</Text>
      </View>
    )
  }
}


class SignUpScreen extends React.Component {
  
  state = { email: '', password: '', errorMessage: null}

  handleSignUp () {
    this.props.navigation.navigate('Home');
  }
/*handleSignUp = () => {
  // TODO: Firebase stuff...
  const { email, password } = this.state
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
}*/
render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Sign Up" 
        onPress={() => this.props.navigation.navigate('Home') }
        /*{this.handleSignUp}*/ />
        <Button
          title="Tienes cuenta? Accede aqui"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
}

class LoginScreen extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  render() {

    return (
      <View style={Styles.container}>
        <Text>Login</Text>
        {/*this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
        </Text>*/} 
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

const styles = StyleSheet.create({
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


export default createMaterialTopTabNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Profile: {screen : ProfileScreen},
  SignUp: {screen : SignUpScreen}
}, {
  initialRouteName: 'Home',
  activeColor: 'red',
  inactiveColor: 'red',
  barStyle: { backgroundColor: 'red' },
});