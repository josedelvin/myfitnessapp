import {
    SafeAreaView,
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    Headers,
    TouchableOpacity,
    ImageBackground
  } from "react-native";
  import { React, useLayoutEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import IonIcon from 'react-native-vector-icons/Ionicons'
  import SearchBar from '../components/shared/searchbar';
import Beginnercategory from "../components/Beginnercategory";


  const Beginnersfull = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: "column" ,backgroundColor:"#2b2a2a"}}>
        <View >
              <View style={{bottom:'2%', position:"absoulte"}}>
              <IonIcon style={{color:"white",left:"4%",position:"relative"}} size={30} name="ios-arrow-back" />
              <Image style={{width:"100%",height:"70%",bottom:70}} source={require("../assets/images/arnold3.jpg")} />
            </View>

            </View>
            </SafeAreaView>
    )
  }

  export default Beginnersfull