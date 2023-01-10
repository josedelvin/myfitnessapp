import {SafeAreaView, Text, View, Image,StyleSheet,ScrollView,Headers} from 'react-native'
import { React, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;





const Homepage = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  return (
        <ScrollView>
            <Image 
          
            style={styles.background}
            source= {require("../assets/images/homepagepic1.jpg")}
            />
            
            <View style={styles.textstyle}>
              <Text style={styles.text}>WORKOUT OF THE DAY</Text>
              <Text style={styles.text2}>Push Ups</Text>
              <Text style={styles.text3}>{date}</Text>
              </View>
              <View >
                <Categories/>
              </View>
            </ScrollView>
  )
}

const styles = StyleSheet.create({
  background : {
    height: 260,
    width:400,
  }, 
  textstyle: {
    top: 50,
    left: 20,
    position:"absolute",
    width: '100%',
    height: '100%',
  },
  text: {
       backgroundColor: 'black',
       marginRight:220,
       padding:5,
        color:'white',
        position:"absolute",
        marginTop:3,
        overflow:"hidden",
        borderRadius:10,

  },
  text2: {
    color:'white',
    position:"absolute",
    marginRight:250,
    padding:5,
    paddingTop: 120,
    paddingBottom:1,
    overflow:"hidden"
  },
  text3: {
    color:'white',
    position:"absolute",
    marginRight:250,
    padding:5,
    paddingTop:155,
    paddingBottom:1,
    overflow:"hidden"
  }
}
)

export default Homepage