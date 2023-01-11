import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Headers,
} from "react-native";
import { React, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";
import Category2 from "../components/Category2";

const current = new Date();
const date = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}`;

const Homepage = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View  style={{ flex: 1, flexDirection: 'column' }}>
      <ScrollView style={{ flex:1 }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={styles.background}
          source={require("../assets/images/homepagepic1.jpg")}
        />

        <View style={styles.textstyle}>
          <Text style={styles.text}>WORKOUT OF THE DAY</Text>
          <Text style={styles.text2}>Push Ups</Text>
          <Text style={styles.text3}>{date}</Text>
        </View>
        <View>
          <Categories />
        </View>

        <View style={styles.paddingstyle}>
          <Category2 />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: "75%",
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
    backgroundColor: "black",
    padding: "1%",
    color: "white",
    position: "absolute",
    overflow: "hidden",
    borderRadius: 10,
  },
  text2: {
    color: "white",
    position: "absolute",
    paddingTop: "35%",
    overflow: "hidden",
  },
  text3: {
    color: "white",
    position: "absolute",
    paddingTop: "45%",
    overflow: "hidden",
  },
  paddingstyle: {
    bottom: "20%",
    paddingLeft:"3%",
    flexGrow: 1
  },
});

export default Homepage;
