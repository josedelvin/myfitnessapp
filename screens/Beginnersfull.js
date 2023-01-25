// Name: Jose Delvin
// Admission no: 2108306

import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { React, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IonIcon from "react-native-vector-icons/Ionicons";

const Beginnersfull = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: "column", backgroundColor: "#2b2a2a" }}
    >
      <View>
        <View style={{ position: "relative", padding: 1 }}>
          <Image
            style={{ width: "100%", height: "30%", bottom: 55 }}
            source={require("../assets/images/arnold3.jpg")}
          />
          <Text
            style={{
              left: "10%",
              position: "absolute",
              top: "15%",
              fontSize: 25,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Full Body Workout
          </Text>
          <IonIcon
            style={{
              color: "white",
              left: "4%",
              position: "absolute",
              top: "1%",
            }}
            size={30}
            name="ios-arrow-back"
          />
          <View>
            <View
              style={{
                backgroundColor: "white",
                height: "80%",
                width: "100%",
                bottom: "10%",
                alignSelf: "center",
                borderRadius: 30,
              }}
            >
              
              <View style={styles.titleContainer}>
                <Image
                  style={styles.icon}
                  source={require("../assets/images/Stretching.png")}
                />
                <Text style={styles.title}>Stetching</Text>
              </View>
              <Text style={styles.description}>1:00</Text>

              <View style={styles.titleContainer}>
                <Image
                  style={styles.icon}
                  source={require("../assets/images/Jump.png")}
                />
                <Text style={styles.title}>Jumping Jacks</Text>
              </View>
              <Text style={styles.description}>x16</Text>

              <View style={styles.titleContainer}>
                <Image
                  style={styles.icon}
                  source={require("../assets/images/Pullups.png")}
                />
                <Text style={styles.title}>Pull-Ups</Text>
              </View>
              <Text style={styles.description}>x16</Text>

              <View style={styles.titleContainer}>
                <Image
                  style={styles.icon}
                  source={require("../assets/images/situps.png")}
                />
                <Text style={styles.title}>Sit-ups</Text>
              </View>
              <Text style={styles.description}>x30</Text>
            </View>

            {/* Other content */}
            <View style={styles.textBox}>
              <Text style={styles.text}>START</Text>
            </View>
          </View>
        </View>
      </View>

      <View></View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "20%",
    left: "4%",
    top: "4%",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: "1%",
    right: "40%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    fontSize: 14,
    color: "gray",
    bottom: "13%",
    left: "18%",
  },
  container1: {
    flex: 1,
  },
  textBox: {
    backgroundColor: "cyan",
    position: "absolute",
    top: "58%",
    height:"50%",
    width: "100%",
    padding: 10,
  },
  text: {
    fontSize: 34,
    alignSelf:"center"
  },
});
export default Beginnersfull;
