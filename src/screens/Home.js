import React, {useState, Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, SafeAreaView, StatusBar} from 'react-native'


import styles from './StyleSheets'
import {getInactiveElevators,function2} from '../logic/HomeLogic'
import { render } from 'react-dom'



export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading:true,
      dataSource:[]
    }
    
  } 
  
componentDidMount(){
    getInactiveElevators()
    .then((InactiveElevators) => {
      console.log(InactiveElevators[2])
      console.log("DID This")
      this.setState({
        isLoading:false,
        dataSource: InactiveElevators
      })
    })

  }

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity
        onPress= {() => 
          this.props.navigation.navigate('Detail')
        }
        >
        <Text> elevator : {item.ID}  serial number : {item.serialNumber}</Text>
        </TouchableOpacity>

      </View>
    )
  }

  render(){

    

    let {welcome,container} = styles
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



// const DATA = getInactiveElevators()
// [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
// ];

// const Item = ({ item, onPress, style }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
//     <Text style={styles.title}>{item.serialNumber}</Text>
//   </TouchableOpacity>
// );

// const Home= () => {
//   const [selectedId, setSelectedId] = useState(null);

//   const renderItem = ({ item }) => {
//     const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

//     return (
//       <Item
//         item={item}
//         onPress={() => setSelectedId(item.id)}
//         style={{ backgroundColor }}
//       />
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         extraData={selectedId}
//       />
//     </SafeAreaView>
//   );
// };


// function Home(props) {
//   const InactiveElevators = getInactiveElevators()

//   const [selectedId, setSelectedId] = useState(null);

//   const Item = ({item, onPress}) => (
//     <TouchableOpacity
//       onPress={onPress}
//       style = {styles.buttonContainerBlue}
//       >
//         <Text style={styles.buttonText}>{`${item.id}\n${item.serial_number}`}</Text>
//     </TouchableOpacity>
//   );

//   const renderItem = ({ item }) => {
//     const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

//     return (
//       <Item
//         item={item}
//         onPress={() => setSelectedId(item.id)}
//         style={{ backgroundColor }}
//       />
//     );
//   };
//   }

//   // const {navigation} = props

//   return (
    

//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={InactiveElevators}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         extraData={selectedId}
//       />
//     </SafeAreaView>

//     // <View>
//     //   <TouchableOpacity
//     //     style={styles.buttonContainerBlue}
//     //     onPress={() => navigation.navigate('Detail')}>
//     //       <Text style={styles.buttonText}>Go to Detail Screen</Text>
//     //   </TouchableOpacity>
//     // </View>
//   )
// }



// export default Home

