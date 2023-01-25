// Name: Jose Delvin
// Admission no: 2108306
import { View, Text ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import React from 'react'




const Catergorycard = ({source1,Date,source,title,description}) => {
  return (
    <TouchableOpacity style={{height:"100%",width:"33%"}}>
      
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
    height: "55%",
    width:314,
    borderRadius:19,
    marginRight:36,
    position:"relative",
  },
  image:{
    height: 30,
    width:30,
    borderRadius:13
  },
  title:{
    bottom:"53%",
    left:"3%",
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
    bottom:"32%",
    left:"4%",
    flexDirection:"row",
    color:"white",
    fontSize:15,
    fontWeight:"bold"
  }

}
)
export default Catergorycard