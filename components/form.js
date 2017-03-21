import React from 'react';
import { Alert, View, Text, TextInput, StyleSheet } from 'react-native';


export default class Form extends React.Component {

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
        <TextInput style={{ height:40 ,width: 300}} onSubmitEditing={this.onSubmit} placeholder="Type here to search"> { this.state.name} </TextInput>
      </View>
    );
  }
}

