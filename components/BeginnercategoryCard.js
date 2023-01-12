import { View, Text ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import React from 'react'


const BeginnercategoryCard = ({source,description}) => {
  return (
    <TouchableOpacity style={{left:"3.5%",width:"100%",paddingBottom:70,}}>
        <Image style={styles.background} 
        source={source} />
      <Text style={styles.descr}>{description}</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  background : {
    height: 210,
    width:360,
    borderRadius:19,
    position:"relative",
  },
 
  descr:{
    bottom:"7%",
    left:"4%",
    flexDirection:"row",
    color:"white",
    fontSize:15,
    fontWeight:"bold"
  }

}
)
export default BeginnercategoryCard