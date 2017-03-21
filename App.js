import React from 'react';
import {  StyleSheet, Image, Text, View } from 'react-native';
import MyButton from './components/Button';
import Card from './components/card';
import Form from './components/form';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search Your Jobs</Text>
        <Form/>
        <Card/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

