import React from 'react';
import {  StyleSheet, Image, Text, View, TouchableHighlight,ScrollView,FlatList,ActivityIndicator} from 'react-native';
import  getJobDetails from '../util/api'



// .

export default class Card extends React.Component {
  onPress(){
    console.log('hi');
  }

  constructor(props) {
    super(props);
    this.state = {
      jobs:[],
      isLoading : true
    };
  }

  componentDidMount() {
  getJobDetails().then((jobs) => {
        this.setState({jobs});
        this.setState({isLoading:false})
    })
  }

  renderLoading() {
    return(
      <ActivityIndicator
        color="#0000ff"
        animating={this.state.isLoading}
        style={[styles.centering, {height: 100}]}
        size="large"
      />
    )
  }

  renderJobList() {
    return (
      <ScrollView>
        <View style={styles.parentCardContainer}>
          {
            this.state.jobs.map(({ company_logo, title, description },index) => {
                return(
                <View key={index} style={styles.cardContainer}>
                   <View style={styles.JobImage}>
                        <Image source={{uri: company_logo}}
                        style={{width: 60, height: 60}} />
                  </View>
                  <View style={styles.Description}>
                    <Text style={styles.heading}>{title} </Text>
                    <Text adjustsFontSizeToFit={true} numberOfLines={4} style={styles.textColor}>{description}</Text> 
                  </View> 
                </View>  
                ) 
            })
         }
        </View> 
      </ScrollView> 

    )
  }
  
  render() {
    if(this.state.isLoading){
      return(this.renderLoading())
    }
    else{
      return(this.renderJobList())
    }
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    borderTopWidth:1.0,
    borderColor: '#AAAAAA',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom:20,
    padding:20
  },
  textColor:{
    color:'#001f3f'
  },
  JobImage:{

  },
  Description:{
  marginLeft:16,
  flex:1
  },
  parentCardContainer:{
    padding:10,
    justifyContent:'space-between'
  },
  heading:{
    color:'#0074D9',
    fontSize:20,
    marginBottom:5
  }

});

