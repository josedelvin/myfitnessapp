// Name: Jose Delvin
// Admission no: 2108306

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Youtube2 from "./Youtube2";

const Categoryyoutube = () => {
  return (
    <View style={{ width: "120%", height: "95%" }}>
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={{ flexDirection: "column", height: "100%", width: "90%" }}
      >
        <Youtube2
          source1={require("../assets/images/nextworkout.jpg")}
          source={require("../assets/images/leg.png")}
          title="NEXT Workout"
          Date="Sep 9, 2020"
          description="Home Leg Workout |
Follow Along"
        />
        <Youtube2
          source1={require("../assets/images/nextworkout.jpg")}
          source={require("../assets/images/pushup.png")}
          title="NEXT Workout"
          Date="Sep 21, 2022"
          description="24 PUSH UP Workout for Big Chest | 
Follow Along"
        />
        <Youtube2
          source1={require("../assets/images/plank.png")}
          source={require("../assets/images/plank.png")}
          title="BullyJuice"
          Date="Feb 20, 2022"
          description="20 MINUTE FULL BODY WORKOUT |
Follow Along"
        />
        <Youtube2
          source1={require("../assets/images/pic4youtube4.png")}
          source={require("../assets/images/pic4youtube4.png")}
          title="BullyJuice"
          Date="Feb 20, 2022"
          description="20 MINUTE FULL BODY WORKOUT |
Follow Along"
        />
        <Youtube2
          source1={require("../assets/images/pic5youtube5.jpg")}
          source={require("../assets/images/pic5youtube5.jpg")}
          title="BullyJuice"
          Date="Feb 20, 2022"
          description="20 MINUTE FULL BODY WORKOUT |
Follow Along"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Categoryyoutube;
