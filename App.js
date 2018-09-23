import React from 'react';
import { FlatList, Text, View, StyleSheet , Button , TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';


class HomeScreen extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  render() {
    return (
      <View >
      <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}} >
      
        <Text>Eres nuevo?</Text>
        <Button
          onPress={() => this.props.navigation.navigate('SignUp')}
          title= "Registrate !"
        />

        <Text>Eres viejo, ruco, y amargado?</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title= "Accede aqui!"
        />
        
      </View>
     
      </View>      

    );
  }
}

class FriendsScreen extends React.Component{
  state = {};

  render(){
    return(
    <View>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />

    </View>)
  }


}


class Posts extends React.Component{
  state = {};

  HandlePrivate(){}
  HandleGlobal(){}
  HandleShared(){}

  render(){

    return(
    <View>
       <View style={{flexDirection: 'row', justifyContent: 'center',alignItems: 'center'}} >
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title= "Privados"
        />
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title= "Mis Friendos"
        />
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title= "Todos"
        />       
      </View>

        <FlatList
          data={[
            {key: 'Esto es bien pisado we'},
            {key: 'Me quiero morir we ;v'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />

    </View>)
  }

  GetPosts (){};

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
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
})


export default createMaterialTopTabNavigator({
 // Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Profile: {screen : ProfileScreen},
  SignUp: {screen : SignUpScreen},
  Posts: {screen : Posts},
  Friendos: {screen : FriendsScreen} 

}, {
  initialRouteName: 'Login',
  activeColor: '#f40b07',
  inactiveColor: '#f40b07',
  barStyle: { backgroundColor: '#f40b07' },
});