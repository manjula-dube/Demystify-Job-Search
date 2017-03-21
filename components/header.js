import React from 'react';
import { Alert, View, Text, TextInput, StyleSheet } from 'react-native';


export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name : "Manjula"
    }
  }

  onSubmit(){
    console.log('Input Submitted');
  }

  render() {
   
    return (
      <View>
        
      </View>
    );
  }
}

