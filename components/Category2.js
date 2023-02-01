// Name: Jose Delvin
// Admission no: 2108306

import { View, Text ,ScrollView,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Category2card from './Category2card'

const Category2 = () => {
    const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('Beginnerworkout');
  };
  return (
    <View style={{ width: "100%", height: "110%" }}>
        <View style={styles.textbox}>
            <Image  source= {require("../assets/images/beginnerlogo.png")} />
            <Text style={styles.text}>Beginner Workout</Text>
            <TouchableOpacity onPress={handleButtonPress}>
        <Text style={styles.text2}>VIEW ALL</Text>
        </TouchableOpacity>
        </View>
        

    <ScrollView style={styles.scrollview} horizontal={true}
    showsHorizontalScrollIndicator={false}>

        <Category2card 
        source1=  {require("../assets/images/beginner1.png")}
        title="Full Body"
        />
        <Category2card 
        source1= {require("../assets/images/beginner2.png")}
        title="Upper Body"
        />
        <Category2card 
        source1= {require("../assets/images/beginner3.jpg")}
        title="Lower Body"/>
    </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    

textbox:{
    flexDirection:"row",
    paddingBottom:"5%",

},
text:{
    top:'9%',
    paddingLeft:"2%",
    fontSize:22,
},
text2:{
    paddingLeft:"13%",
    paddingTop:"8%",
    fontSize:16,
  } ,
  scrollview: {
    paddingHorizontal:"1%",
    paddingRight:"20%"
  },
}
)
  
export default Category2