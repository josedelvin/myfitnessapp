// Name: Jose Delvin
// Admission no: 2108306

import {
  View,
  StyleSheet,
  ScrollView
} from "react-native";
import React from "react";
import Youtube2 from "./Youtube2";

const Categoryyoutube = () => {
  return (
    <View style={{ width: "120%", height: "95%"}}>
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={{ flexDirection: "column", height: "100%", width: "90%" }}
      >
        <Youtube2
          source1={require("../assets/images/nextworkout.jpg")}
          source={require("../assets/images/leg.png")}
          youtubeLink="https://www.youtube.com/watch?v=Wml7psvJBxI&ab_channel=NEXTWorkout"
          title="NEXT Workout"
          Date="Sep 9, 2020"
          description="Home Leg Workout |
Follow Along"
        />
        <Youtube2
          source1={require("../assets/images/nextworkout.jpg")}
          source={require("../assets/images/pushup.png")}
          youtubeLink= "https://www.youtube.com/watch?v=WP0MYSh0JSg&ab_channel=NEXTWorkout"
          title="NEXT Workout"
          Date="Sep 21, 2022"
          description="24 PUSH UP Workout for Big Chest | 
Follow Along"
        />
        <Youtube2
          source1={require("../assets/images/plank.png")}
          source={require("../assets/images/plank.png")}
          youtubeLink= "https://www.youtube.com/watch?v=oAPCPjnU1wA&ab_channel=BullyJuice"
          title="BullyJuice"
          Date="Feb 20, 2022"
          description="20 MINUTE FULL BODY WORKOUT |
Follow Along"
        />
        <Youtube2
          source1={require("../assets/images/pic4youtube4.png")}
          source={require("../assets/images/pic4youtube4.png")}
          youtubeLink="https://www.youtube.com/watch?v=q7rCeOa_m58"
          title="THENX"
          Date="Aug 30, 2021"
          description="20 Min Complete Home Leg Workout | 
Follow Along"
        />
        <Youtube2
          source1={require("../assets/images/pic5youtube5.jpg")}
          source={require("../assets/images/pic5youtube5.jpg")}
          youtubeLink="https://www.youtube.com/watch?v=GkZGLpJVC0Y"
          title="V Shred"
          Date="Jul 14, 2019"
          description="Full Shoulder Workout For Boulder 
Shoulders Dumbbells & Barbells ONLY!"
        />

<Youtube2
          source1={require("../assets/images/pic5youtube5.jpg")}
          source={require("../assets/images/pic5youtube5.jpg")}
          youtubeLink="https://www.youtube.com/watch?v=GkZGLpJVC0Y"
          title="V Shred"
          Date="Jul 14, 2019"
          description="Full Shoulder Workout For Boulder 
Shoulders Dumbbells & Barbells ONLY!"
        />
        <Youtube2
          source1={require("../assets/images/pic5youtube5.jpg")}
          source={require("../assets/images/pic5youtube5.jpg")}
          youtubeLink="https://www.youtube.com/watch?v=GkZGLpJVC0Y"
          title="V Shred"
          Date="Jul 14, 2019"
          description="Full Shoulder Workout For Boulder 
Shoulders Dumbbells & Barbells ONLY!"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Categoryyoutube;
