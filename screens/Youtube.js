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
import Categories from "../components/Categories";
import Category2 from "../components/Category2";

const Youtube = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column" ,backgroundColor:"#2b2a2a"}}>
        <View style={styles.HeaderBox}>
      <Text style={styles.HeaderTitle}>Youtube Workouts</Text>
      <TouchableOpacity>
      <Image  style={styles.spotifylogo} source={require("../assets/images/spotify.png")}/>
      </TouchableOpacity>
        </View>
      <ScrollView style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}>


      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    HeaderTitle:{
        color:'white',
        margin:5,
        padding:"5%",
        paddingLeft:'10%',
        fontSize:26,
    },
    HeaderBox:{
        height:'30%',
        width:"100%"
    },
    spotifylogo:{
        
        padding:"1%", 
        left:"87%",
        bottom:"140%"
    }
}
)
export default Youtube
