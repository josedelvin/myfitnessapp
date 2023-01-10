import { View, Text,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Catergorycard from './Categorycard'
import FeaturedRow from './FeaturedRow'

const Categories = () => {
  return (
    <View>
    <View style={styles.titleBox} >
      <Text style={styles.title1}>Today is your Leg Day!</Text>
      </View>
      <View style={styles.text}>
        <Image style={styles.image} source= {require("../assets/images/youtube-logo.png")}/>
        <TouchableOpacity>
        <Text style={styles.text2}>VIEW ALL</Text>
        </TouchableOpacity>
        </View>
      <ScrollView style={styles.scrollview} horizontal
        showsHorizontalScrollIndicator={false}>
        <Catergorycard  
        source1= {require("../assets/images/nextworkout.jpg")}
        source= {require("../assets/images/leg.png")}
        title="NEXT Workout"
        Date="Sep 9, 2020"
        description="Home Leg Workout |
Follow Along"/>
        <Catergorycard  
        source1= {require("../assets/images/nextworkout.jpg")}
        source= {require("../assets/images/pushup.png")}
        title="NEXT Workout"
        Date="Sep 21, 2022"
        description="24 PUSH UP Workout for Big Chest | 
Follow Along"/>
        <Catergorycard 
        source1= {require("../assets/images/plank.png")} 
        source= {require("../assets/images/plank.png")} 
        title="BullyJuice"
        Date="         Feb 20, 2022"
        description="20 MINUTE FULL BODY WORKOUT |
Follow Along"/>  
      </ScrollView >
  
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
        marginBottom:40,
      },
      scrollview: {
        paddingHorizontal:10,
      },
      title1: {
        fontSize:14,
        fontStyle:"normal",
        fontWeight: "bold",
      },   
      image:{
        marginBottom:1,
        left:10,
        margin:1,
        padding:30,
        paddingLeft:110,
        paddingTop:1,
        height:1,
        width:1
      } ,
      text:{
        marginBottom:20,
        paddingBottom:1,
        flexDirection:"row"
      } ,
      text2:{
        paddingLeft:165,
        paddingTop:8,
        fontSize:16
      } 
}
)

export default Categories