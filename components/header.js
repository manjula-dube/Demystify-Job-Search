import React from 'react';
import { Alert, View, Text, TextInput, StyleSheet } from 'react-native';


export default class Header extends React.Component {

  render() {
    return (
      <View style={styles.PinContainer}>
        <Text style={styles.PinText}>Find Your Dream Job</Text>
        <Text style={styles.SignIn}>Sign In</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  PinContainer: {
    backgroundColor: '#C0C0C0',
    flex:1,
    justifyContent: 'center',
    flexDirection: 'row',
    padding:20,
    marginTop:18,
    justifyContent:'space-between'
  },
  PinText:{
    fontSize:19,
  },
  SignIn:{
    fontSize:15,
  }
});