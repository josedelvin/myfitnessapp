// Name: Jose Delvin
// Admission no: 2108306
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { React, useLayoutEffect, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";
import Category2 from "../components/Category2";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const current = new Date();
const date = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}`;

const workouts = [
  {
    name: "Push Ups",
    image:
      "https://cdn.pixabay.com/photo/2017/08/10/23/34/street-workout-2628904_1280.jpg",
  },
  {
    name: "Squats",
    image:
      "https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Jumping Jacks",
    image:
      "https://images.pexels.com/photos/4853085/pexels-photo-4853085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Lunges",
    image:
      "https://images.pexels.com/photos/8454923/pexels-photo-8454923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Crunches",
    image:
      "https://images.pexels.com/photos/5262853/pexels-photo-5262853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Homepage = () => {
  const navigation = useNavigation();

  const handleSpotifyIconPress = () => {
    navigation.navigate("Spotify");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [workout, setWorkout] = useState("Push Ups");
  const [imageUrl, setImageUrl] = useState("");

  const randomizeWorkout = () => {
    const workouts = [
      "Push Ups",
      "Squats",
      "Jumping Jacks",
      "Lunges",
      "Crunches",
    ];
    const randomIndex = Math.floor(Math.random() * workouts.length);
    setWorkout(workouts[randomIndex]);
  };

  useEffect(() => {
    randomizeWorkout();
    const workoutImage = workouts.find((w) => w.name === workout)?.image;
    setImageUrl(workoutImage || "");
  }, [workout]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={[styles.container]}>
          <Image style={styles.background} source={{ url: imageUrl }} />
          <TouchableOpacity onPress={handleSpotifyIconPress}>
            <Icon style={styles.spotifylogo} size={30} name="headphones" />
          </TouchableOpacity>

          <View style={styles.textstyle}>
            <Text style={styles.text}>WORKOUT OF THE DAY</Text>
            <Text style={styles.text2}>{workout}</Text>
            <Text style={styles.text3}>{date}</Text>
          </View>
          <View>
            <Categories />
          </View>

          <View style={styles.paddingstyle}>
            <Category2 />
          </View>
        </View>

        <Text style={{ height: 500, overflow: "hidden", width: 150 }}> </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 200,
    height: "100%",
  },

  background: {
    height: "70%",
    width: "100%",
  },
  textstyle: {
    top: "15%",
    left: "5%",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  text: {
    backgroundColor: "#465362",
    padding: "1%",
    color: "white",
    position: "absolute",
    overflow: "hidden",
    borderRadius: 10,
    fontWeight: "bold",
  },
  text2: {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    padding: "1%",
    fontSize: 15,
    overflow: "hidden",
    backgroundColor: "#465362",
    top: "32%",
    borderRadius: "7%",
  },
  text3: {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: "40%",
    borderRadius: "7%",
    padding: "1%",
    backgroundColor: "#465362",
    overflow: "hidden",
    fontSize: 13,
  },
  paddingstyle: {
    bottom: "20%",
    left: "2%",
  },

  spotifylogo: {
    margin: 1,
    bottom: "750%",
    left: "85%",
    color: "#465362",
  },
});

export default Homepage;
