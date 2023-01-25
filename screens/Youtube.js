// Name: Jose Delvin
// Admission no: 2108306

import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Headers,
  TouchableOpacity,
} from "react-native";
import { React, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IonIcon from 'react-native-vector-icons/Ionicons'
import SearchBar from '../components/shared/searchbar';
import Categoryyoutube from "../components/Categoryyoutube";
const Youtube = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column" ,backgroundColor:"#2b2a2a"}}>
        <View >
            <SearchBar />
            <View style={{left:"4%",bottom:'25%',}}>
            <IonIcon style={{color:"white",}} size={30} name="ios-arrow-back" />
          </View>
      <Text style={styles.HeaderTitle}>Youtube Workouts</Text>
      <TouchableOpacity>
      <Image  style={styles.spotifylogo} source={require("../assets/images/spotify.png")}/>
      </TouchableOpacity>
        </View>
      <View >
        <Categoryyoutube/>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    HeaderTitle:{
        color:'white',
        margin:5,
        bottom:"50%",
        paddingLeft:'20%',
        fontSize:26,
    },
    spotifylogo:{
      height:30,
      width:30,
        padding:"1%", 
        left:"87%",
        bottom:"370%"
    }
}
)
export default Youtube
