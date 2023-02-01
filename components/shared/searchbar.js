// Name: Jose Delvin
// Admission no: 2108306


import { TextInput, View,StyleSheet } from "react-native";
import  { React,useState } from "react"
import Icon from "react-native-vector-icons/AntDesign";
const SearchBar = () => {

  const [searchInput, setSearchInput] = useState('');

  return (
    <View style={{top:"40%"}}>
      <TextInput 
        style={styles.searchBar} 
        value={searchInput}
        secureTextEntry={false}
        clearTextOnFocus={false}
         autoCorrect={false}
  autoCapitalize={'none'}
        placeholder ="  Search..."
        placeholderTextColor={'gray'}
        onChangeText={(text) => setSearchInput(text)}
        
      />         
      <Icon style={{position:"absolute",paddingBottom: "50%",top:"33%", left:"5%",color:'gray'}} size  = {16} name='search1'/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor:'#C7D3DD',
    alignSelf:"center",
    height: 50,
    width:"95%",
    borderWidth: 1,
    paddingLeft: 30,
    padding: 10,
    borderRadius: 10,
    margin: 1,
    color:'gray',
    fontSize: 20,
    borderColor:"#A2AEBB",
    shadowColor:'#759FBC',
    shadowOffset:{width:1,height:1},
    shadowOpacity:1
    
  }
});

export default SearchBar;

