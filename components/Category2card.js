import { View, Text,Image ,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native'
import React from 'react'

const Category2card = ({source1,title}) =>{
  return (
    <View >
    <TouchableOpacity style={styles.content}>
      <Image style={styles.background} 
        source={source1}
        />
        <View style={styles.title}>
          <Text>{title}</Text>
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
    height: "45%",
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
    bottom:"8%",
    left:"4%",
    color:'white',
    flexDirection:"column"
  },
}
)
export default Category2card