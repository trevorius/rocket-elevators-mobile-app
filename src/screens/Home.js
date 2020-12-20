import React, {useState, Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, SafeAreaView, StatusBar} from 'react-native'


import styles from './StyleSheets'
import {getInactiveElevators} from '../logic/HomeLogic'
import { render } from 'react-dom'


//  export a class from file that renders the view
export default class App extends Component{

  // class constructor
  constructor(props){
    super(props)
    this.state = {
      isLoading:true,
      dataSource:[]
    }
    
  } 
  // Api call to get the list of elevators
componentDidMount(){
    getInactiveElevators()
    .then((InactiveElevators) => {
      this.setState({
        isLoading:false,
        dataSource: InactiveElevators
      })
    })

  }
  // render the individual section reserved for an elevator
  _renderItem = ({item, index}) => {
    const Elevator = {
        ID: item.id,
        lastInspectionDate:item.last_inspection_date,
        inspectionCertificate: item.inspection_certificate,
        status: item.status,
        serialNumber: item.serial_number,
    } 
    return (
      <View style={styles.item}>
        <TouchableOpacity
        onPress= {() => {
          console.log(item.ID);
          this.props.navigation.navigate('Detail',{item: Elevator})
        }}
        >
        <Text style={styles.textSmall}> elevator : {item.id}  serial number : {item.serial_number}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  // render the container for the final view
  render(){
  
    let {dataSource, isLoading} = this.state
    return(
      <View style={styles.container}>
       <FlatList
        data={dataSource}
        renderItem={this._renderItem}
        keyExtractor={(item,index) => index.toString()}
       />
      </View>
    )
  }
}