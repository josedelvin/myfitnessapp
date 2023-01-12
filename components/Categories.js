import { View, Text,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Catergorycard from './Categorycard'

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
        Date="Feb 20, 2022"
        description="20 MINUTE FULL BODY WORKOUT |
Follow Along"/>  
      </ScrollView >
    </View>
   
  )
}


const styles = StyleSheet.create({

    titleBox: {
        backgroundColor: '#9553CC',
        margin:"25%",
        padding:"3%",
        color:'black',
        position:"relative",
        marginTop:"8%",
        contentContainerStyle:"center",
        overflow:"hidden",
        borderRadius:15,
        marginBottom:"15%",
      },
      scrollview: {
        paddingHorizontal:"3%",
      },
      title1: {
        fontSize:14,
        fontStyle:"normal",
        fontWeight: "bold",
        alignSelf:'center',
        
      },   
      image:{
        left:"30%",
        padding:"8%",
        paddingLeft:"33%",
        paddingTop:'1%',
        height:"5%",
        width:"5%"
      } ,
      text:{
        marginBottom:"6%",
        paddingBottom:"1%",
        flexDirection:"row"
      } ,
      text2:{
        paddingLeft:"37%",
        paddingTop:"3%",
        fontSize:16
      } 
}
)

export default Categories