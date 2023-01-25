// Name: Jose Delvin
// Admission no: 2108306

import { View, Text ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import React from 'react'


const Youtube2 = ({source1,Date,source,title,description}) => {
  return (
    <TouchableOpacity style={{left:"3.5%",width:"100%"}} >
      
        <Image style={styles.background} 
        source={source}
        />
        <View style={styles.title}>
        <Image style={styles.image}
        source={source1}
        />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.Datetext}>{Date}</Text>
      </View>
      <Text style={styles.descr}>{description}</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
background : {
    height: 218,
    width:360,
    borderRadius:19,
    position:"relative",
  },
  image:{
    height: 30,
    width:30,
    borderRadius:13
  },
  title:{
    bottom:"65%",
    left:"2%",
    flexDirection:"column"
  },
  text:{
    bottom:"45%",
    left:"10%",
    color:"white",
    fontStyle:"normal",
    fontWeight:"bold"
  },
  Datetext:{
    bottom:"45%",
    left:"10%",
    color:"white",
    fontStyle:"normal",
    fontWeight:"bold"
  },
  descr:{
    bottom:"27%",
    left:"4%",
    flexDirection:"row",
    color:"white",
    fontSize:15,
    fontWeight:"bold"
  }

}
)
export default Youtube2