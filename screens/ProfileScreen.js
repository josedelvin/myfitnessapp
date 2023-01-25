import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {React,useLayoutEffect} from "react";
import { SafeAreaView } from "react-native";

function Storycomponent() {
  
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        bottom: "59%",
        justifyContent: "space-evenly",
      }}
    >
      <TouchableOpacity style={{flexDirection: "row"}}>
      <Image
        source={require("../assets/images/highlight1.jpeg")}
        style={styles.StoryStyles}
      ></Image>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
        source={require("../assets/images/highlight2.jpeg")}
        style={styles.StoryStyles}
      ></Image>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
        source={require("../assets/images/highlight3.jpeg")}
        style={styles.StoryStyles}
      ></Image>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
        source={require("../assets/images/highlight4.jpeg")}
        style={styles.StoryStyles}
      ></Image>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
        source={require("../assets/images/highlight5.jpeg")}
        style={styles.StoryStyles}
      ></Image>
      </TouchableOpacity>
       
    </View>
   
  );
}

function GymDaysComponents() {

  return (
    <View style={{ backgroundColor: "cyan" }}>
      <Text style={{ color: "red" }}>Gym Days</Text>
    </View>
  );
}

const ProfileScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Profile}>
        <Text style={styles.HeaderStyle}>elliott_daddy</Text>
        <View style={styles.ProfileInfo}>
          <Text style={styles.TextStyle}>69{"\n"} Followers</Text>
          <Text style={styles.TextStyle}>21{"\n"} Following</Text>
          <Text style={styles.TextStyle}>7{"\n"} Workouts</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>

        <Image
          source={require("../assets/images/profilepic.jpeg")}
          style={{
            height: 85,
            width: 85,
            borderRadius: 42.5,
            bottom: "1%",
            left: "7%",
          }}
        ></Image>
        <Text
          style={{
            color: "white",
            justifyContent: "center",
            paddingLeft: "8%",
          }}
        >
          Elliot Chong
        </Text>
      </View>
      <Storycomponent />
      {/* <GymDaysComponents/> will work on this another*/}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    height: "100%",
    width: "100%",
    marginTop: StatusBar.currentHeight,

  },
  HeaderStyle: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    top: "15%",
  },

  Profile: {
    width: "100%",
    height: "39%",
    backgroundColor: "black",
    bottom: "33%",
    borderRadius: 15,
  },

  TextStyle: {
    color: "white",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
    marginHorizontal: 8
  },

  ProfileInfo: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    top: "17%",
    left: "15%",
    paddingLeft: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",

    width: "25%",
    justifyContent: "center",
    alignSelf: "center",
    top: "32%",
    left: "15%",
  },
  StoryStyles: {
    height: 70,
    width: 70,
    borderRadius: 42.5,
  },
});