import React from 'react';
import {  View, Text, TextInput, StyleSheet } from 'react-native';


export default class Search extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   name : "Start looking for jobs here"
    // }
  }

  onSubmit(){
    console.log('Input Submitted');
  }

  render() {
   
    return (
       <View style={styles.Search}>
          <TextInput style={{ height:40}} onSubmitEditing={this.onSubmit} placeholder="Type here to search"> { this.state.name} </TextInput>
       </View> 
    );
  }
}

const styles = StyleSheet.create({
  Search: {
    margin:10
  },
  
});