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
    <View style={{ width: "120%", height: "113%" }}>
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
    container:{
     marginBottom:"5%",
     
    },

textbox:{
    flexDirection:"row",
    paddingBottom:"5%",

},
text:{
    top:'7%',
    paddingLeft:"2%",
    fontSize:22,
},
text2:{
    paddingLeft:"11%",
    paddingTop:"8%",
    fontSize:16,
  } ,
  scrollview: {
    paddingHorizontal:"1%",
  },
}
)
  
export default Category2