import { View, Text ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import React from 'react'


const Catergorycard = ({source1,Date,source,title,description}) => {
  return (
    <TouchableOpacity>
      
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
    height: 200,
    width:314,
    borderRadius:19,
    marginRight:30,
    position:"relative",
  },
  image:{
    height: 30,
    width:30,
    borderRadius:13
  },
  title:{
    bottom:190,
    left:15,
    flexDirection:"column"
  },
  text:{
    bottom:30,
    left:35,
    color:"white",
    fontStyle:"normal",
    fontWeight:"bold"
  },
  Datetext:{
    bottom:30,
    left:35,
    color:"white",
    fontStyle:"normal",
    fontWeight:"bold"
  },
  descr:{
    bottom:110,
    left:15,
    flexDirection:"row",
    color:"white",
    fontSize:15,
    fontWeight:"bold"
  }

}
)
export default Catergorycard