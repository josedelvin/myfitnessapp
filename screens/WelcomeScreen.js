// Name: Jose Delvin
// Admission no: 2108306
import React from 'react';
import { StyleSheet, Text, View,ImageBackground} from 'react-native';

function Welcomescreen(props) {
  return (
    <ImageBackground
    style={styles.background}
    source= {require("../assets/images/splashscreen.jpg")}
    >
      <View style= {styles.loginButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background : {
    flex: 1,
  }, 
  loginButton: {
    width : '100%',
    backgroundColor: '#fc5c65'
  }

  }
)

export default Welcomescreen;