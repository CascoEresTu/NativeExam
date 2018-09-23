import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {NavigationBar} from 'react-native-navbar';
import { DrawerNavigator } from 'react-navigation';

//import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'

 export default class Home extends React.Component {
 

    render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title= "DrawerOpen"
        />
        <TextInput title="Email" />
        <TextInput title="Password" type="password" />
      </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  const styles1 = {
    container: {
      flex: 4,
      backgroundColor: 'red',
      TextColor: 'white'
    },
  };
  
  const rightButtonConfig = {
    title: 'Profile',
    tintColor: 'white',
    handler: () => navigation.navigate('SignUp')
  };
  const leftButtonConfig = {
    title: 'Settings',
    tintColor: 'white',
    handler: () => alert('Aun no implementado'),
  }
   
  const titleConfig = {
    title: 'MY UGLY TWITTER CLONE',
    tintColor: 'white'
  
  };

 