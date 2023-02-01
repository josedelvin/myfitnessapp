import { StyleSheet, Text, View,Image} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Zocial";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import IonIcon from "react-native-vector-icons/AntDesign"
import { TouchableOpacity } from "react-native-gesture-handler";

function PlayComponenets() {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);

  return(
       <View style ={styles.Playbuttons}>
        <TouchableOpacity>
          <IonIcon style={{color:"white",}} size={40} name="banckward"  />
          </TouchableOpacity>
          <TouchableOpacity>
          <IonIcon style={{color:"white",}} size={45} name="play" />
          </TouchableOpacity>
          <TouchableOpacity>
          <IonIcon style={{color:"white",}} size={40} name="forward" />
          </TouchableOpacity>
        </View>
    
  )
}

const MusicScreen = () => {

  
  return (
    <View style={styles.Container}>
      <View
        style={{
          backgroundColor: "#2B2A2A",
          position: 'absolute',
          flexDirection: "row-reverse",
          justifyContent: "center",
          position: "relative",
          height: "25%",
          width: "100%",
          bottom: "60%",
        }}
      >
        <Text style={styles.TextStyle}>Import From:</Text>

        <View style={styles.Buttons}>
          <Icon size={25} name="spotify" style={{ color: "green" }}></Icon>
          <Icon size={25} name="soundcloud" style={{ color: "orange" }}></Icon>
          <Icon size={25} name="googleplay" style={{ color: "orange" }}></Icon>
        </View>
      </View>
      <View>
      <Image source={require('../assets/images/profilepic.jpeg')} style={styles.CoverPic}>
        </Image>
        <PlayComponenets/>
        </View>
    </View>
  );
};

export default MusicScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2B2A2A",
  },
  TextStyle: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    left: "90%",
    bottom: "10%",
  },
  Buttons: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    right:'12%'
  },

  CoverPic: {
    position: 'absolute',
    height: 350,
    width: 350,
    bottom: -155,
    alignSelf: 'center'
    

  },

  Playbuttons: {
    position: 'absolute',
    flexDirection: 'row',
    top: 170,
    alignSelf: 'center',
    width: "100%",
    justifyContent: 'space-evenly',

  }
})
