import React from 'react';
import { Alert, View, Text, Button, StyleSheet } from 'react-native';


export default class MyButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name : "Manjula"
    }
  }

  render() {
    console.log('Hello');
    return (
      <View>
        <Text> { this.state.name} </Text>
        <Button title={this.props.title} color="#841584" accessibilityLabel="Learn more about this purple button"/>
      </View>
    );
  }
}

