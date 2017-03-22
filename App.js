import React from 'react';
import {  StyleSheet, Image, Text, View } from 'react-native';
import Header from './components/header';
import Search from './components/search';
import Card from './components/card';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.viewContainer,styles.viewOne]}>
          <Header/>
        </View>
        <Search/>
        <Card/>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  viewOne:{
    flexDirection: 'row',
    backgroundColor:'white'
  },
  viewContainer:{
     justifyContent: 'center',
     alignItems: 'flex-start'
  }
});

