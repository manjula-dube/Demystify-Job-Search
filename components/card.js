import React from 'react';
import {  StyleSheet, Image, Text, View, TouchableHighlight,FlatList } from 'react-native';



const jobs = [
{ title:'BookMyShow',
  title:'Directi',
  title:'Credr',
  title:'random'
}
]

export default class Card extends React.Component {
  onPress(){
    console.log('hi');
  }

  renderItem(job){
    return <Text> {job.title} </Text>
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.onPress}>
          <View style={styles.cardContainer}>
             <Text style={styles.textColor}> BOOKMYSHOW </Text>
             <Text style={styles.textColor}> BOOKMYSHOW </Text>
          </View> 
        </TouchableHighlight> 
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius : 3,
    borderWidth : 0.5,
    borderColor: '#808080',
    backgroundColor: 'rebeccapurple',
    height: 300 ,
    width: 300,
    padding:34,
    alignItems: 'center',

  },
  textColor:{
    color:'white'
  }

});

