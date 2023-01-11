import { View, Text ,ScrollView,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import Category2card from './Category2card'

const Category2 = () => {
  return (
    <View>
        <View style={styles.textbox}>
            <Image source= {require("../assets/images/beginnerlogo.png")} />
            <Text style={styles.text}>Beginner Workout</Text>
            <TouchableOpacity>
        <Text style={styles.text2}>VIEW ALL</Text>
        </TouchableOpacity>
        </View>
        

    <ScrollView horizontal
    showsHorizontalScrollIndicator={false}>

        <Category2card 
        source1= {require("../assets/images/plank.png")}
        title="Full Body"
        />
        <Category2card 
        source1= {require("../assets/images/plank.png")}
        title="Full Body"
        />
        <Category2card 
        source1= {require("../assets/images/plank.png")}
        title="Full Body"/>
    </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
scrollview: {
    paddingHorizontal:"3%",
    

},
textbox:{
    flexDirection:"row",
    paddingLeft:"3%",

},
text:{
    top:'7%',
    paddingLeft:"2%",
    fontSize:22,
},
text2:{
    paddingLeft:"10%",
    paddingTop:"8%",
    fontSize:16
  } 
}
)
  
export default Category2