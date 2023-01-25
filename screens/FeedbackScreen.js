//2107925
//Name: Skye Ryan Chew




import { StyleSheet, Text, View,ImageBackground,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import * as React from 'react';
import Icon from "react-native-vector-icons/AntDesign"
import { TextInput, Button } from "react-native-paper";

const TextPlaceholder = () => {
  const [text, setText] = React.useState("Describe your feedback here");
  return(
    <TextInput style = {styles.Box}
    placeholder={text}
    onChangeText={text => setText(text)}
    multiline = {true}
    numberOfLines ={1}
    />
  );
};

const SubmitButton = () => (
  <Button Icon="checkcircle"style = {styles.Button} mode="contained" onPress={() => console.log('Pressed')}>
    Submit?
  </Button>
);

const FeedbackScreen  = () => {
    const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, []);
  return (
    
  <View>
    
      <ImageBackground source={require('../assets/images/gigachad.jpg')} style={styles.Image}>
      <Text style={styles.HeaderStyle}>Feedback</Text>
      <Text style={styles.TextStyle}>
        Your opinion is important to us. This {'\n'}
        way we can keep improving our app</Text>
        <Text style = {styles.TextStyle}>{'\n\n\n\n\n'}How did we do?</Text>
        <TouchableOpacity>
        <View style={{flexDirection:"row", alignSelf:"center"}}>
          <TouchableOpacity>
        <Icon size={70} name="star" style= {styles.Icon} ></Icon>
        </TouchableOpacity>

        <TouchableOpacity>
        <Icon size={70} name="star" style= {styles.Icon} ></Icon>
        </TouchableOpacity>

        <TouchableOpacity>
        <Icon size={70} name="star" style= {styles.Icon} ></Icon>
        </TouchableOpacity>

        <TouchableOpacity>
        <Icon size={70} name="star" style= {styles.Icon} ></Icon>
        </TouchableOpacity>

        <TouchableOpacity>
        <Icon size={70} name="star" style= {styles.Icon} ></Icon>
        </TouchableOpacity>
        </View>

        </TouchableOpacity>
        <Text style = {styles.SecondText}> {"\n\n"} Your overall satisfaction of this app </Text>

      <TextPlaceholder/>
        <SubmitButton/>
      </ImageBackground>
    </View>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  TextStyle: {
    top: 100,
    textAlign: "center",
    alignContent: "center",
    color: 'white',
    fontSize: 15,
    
  },
  SecondText: {
    justifyContent: 'center',
    color: 'white',
    alignContent: 'center',
    alignSelf: 'center',
    top:100



  },
  container: {
    paddingTop : 5,
    flex: 1,
    alignItems:'center',
    justifyContent: "center",
  },

  HeaderStyle: {
    fontSize: 20,
    top: 100,
   alignSelf: 'center',
    textAlign: "center",
    fontStyle: "Bold",
    fontWeight: "700",
    color: "white"
  },
  Image: {
    height: "100%"
  },

  Icon: {
    alignItems: "center",
    justifyContent: "space-between",
    top: 110,
    alignSelf: 'center',
    color: 'white',
    flexDirection: 'row'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  Box: {
    alignContent: 'center',
    top: "15%",
    borderRadius: 20,
    borderWidth: 5,
    margin: 10,
    
  },

  Button: {
    
    alignContent: 'center',
    alignSelf: 'center',
    right:"7%",
    top: "20%",
    width: "150%",
    shadowRadius: 25,


  }
  
});