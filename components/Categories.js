import { View, Text,StyleSheet,ScrollView,Image} from 'react-native'
import React from 'react'
import Catergorycard from './Categorycard'

const Categories = () => {
  return (
    <View>
    <View style={styles.titleBox} >
      <Text style={styles.title1}>Today is your Leg Day!</Text>
      </View>
        <Image style={styles.image} source= {require("../assets/images/youtube-logo.png")}/>
        
      <ScrollView horizontal>
        <Catergorycard  
            source= {require("../assets/images/leg.png")}
        title="testing 1"/>
        <Catergorycard  source= {require("../assets/images/pushup.png")}
        title="testing 2"/>
        <Catergorycard source= {require("../assets/images/plank.png")}  
        title="testing 3"/>
        
      </ScrollView>
      
    </View>
    
  )
}



const styles = StyleSheet.create({

    titleBox: {
        backgroundColor: '#9553CC',
        margin:100,
        padding:13,
        color:'black',
        position:"relative",
        marginTop:30,
        contentContainerStyle:"center",
        overflow:"hidden",
        borderRadius:10,
        marginBottom:15,
      },
      title1: {
        fontSize:14,
        fontStyle:"normal",
        fontWeight: "bold",
      },   
      image:{
        marginBottom:15,
        margin:1,
        padding:30,
        paddingLeft:110,
        paddingTop:1,
        height:1,
        width:1,
       
      } 
}
)

export default Categories