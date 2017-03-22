import React from 'react';
import {  StyleSheet, Image, Text, View, TouchableHighlight,ScrollView,ActivityIndicator,ListView} from 'react-native';
import  getJobDetails from '../util/api'

const jobs = [];
export default class Card extends React.Component {
  onPress(){
    console.log('hi');
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(jobs),
      isLoading : true
    };
  }

  componentDidMount() {
  getJobDetails().then((jobs) => {
        this.setState({
          dataSource : this.state.dataSource.cloneWithRows(jobs),
          isLoading:false
        });
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

  renderJobList(rowData,sectionID,rowID) {
    return (
      <ScrollView>
        <View style={styles.parentCardContainer}>
              <View key={rowID} style={styles.cardContainer}>
                   <View style={styles.JobImage}>
                        <Image source={{uri: rowData.company_logo}}
                        style={{width: 60, height: 60}} />
                  </View>
                  <View style={styles.Description}>
                    <Text style={styles.heading}>{rowData.title} </Text>
                    <Text adjustsFontSizeToFit={true} numberOfLines={4} style={styles.textColor}>{rowData.description.replace(/<\/?[^>]+>/gi, '')}</Text> 
                  </View> 
                </View>  
        </View> 
      </ScrollView> 

    )
  }
  
  render() {
    if(this.state.isLoading){
      return(this.renderLoading())
    }
    else{
      return (<ListView dataSource={this.state.dataSource} 
        renderRow={this.renderJobList.bind(this)}/>)
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

