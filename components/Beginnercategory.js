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
import BeginnercategoryCard from "./BeginnercategoryCard";
  
  const Beginnercategory = () => {
    return (
        <View style={{ width: "120%", height: "90%" }}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          style={{ flexDirection: "column", height: "100%", width: "90%" }}
        >
          <BeginnercategoryCard
            source={require("../assets/images/beginner1.png")}
            description="Full Body"
          />
          <BeginnercategoryCard
            
            source={require("../assets/images/beginner2.png")}
            description= "Upper Body"
          />
          <BeginnercategoryCard
            
            source={require("../assets/images/beginner3.jpg")}
            description="Lower Body"
          />
          <BeginnercategoryCard
            
            source={require("../assets/images/pic4youtube4.png")}
            description="Legs"
          />
    
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({


  });
  
  export default Beginnercategory;
  