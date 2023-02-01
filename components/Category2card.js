// Name: Jose Delvin
// Admission no: 2108306


import { View, Text,Image ,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native'
import React from 'react'

const Category2card = ({source1,title}) =>{
  return (
    <View >
    <TouchableOpacity style={styles.content}>
      <Image style={styles.background} 
        source={source1}
        />
        <View >
          <Text style={styles.title1}>{title}</Text>
        </View>
    </TouchableOpacity>
    </View>
  )
}   

const styles = StyleSheet.create({
  content:{
    height:"100%",
    width:"100%",
    padding:1,
  },
  background : {
    height: "48%",
    width:312,
    borderRadius:19,
    marginRight:30,
    position:"relative",
  },
  image:{
    height: 30,
    width:30,
    borderRadius:13
  },
  title1:{
    bottom:"130%",
    left:"4%",
    color:"white",
    fontSize:20,
    flexDirection:"column"
  },
}
)
export default Category2card