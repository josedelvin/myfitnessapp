import { View, Text ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import React from 'react'


const Catergorycard = ({source,title}) => {
  return (
    <TouchableOpacity>
        <Image style={styles.background}
        source={source}
        />
      <Text>{title}</Text>
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
  }
}
)
export default Catergorycard