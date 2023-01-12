import { TextInput, View,StyleSheet,Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
const SearchBar = () => {
  return (
    <View style={{top:"40%"}}>
      <TextInput 
        style={styles.searchBar}
        
        placeholder ="  Search..."
        placeholderTextColor={'gray'}
        onChangeText={(text) => {
          // handle the change in search input text here
        }}
        
      />         
      <Icon style={{position:"absolute",paddingBottom: "50%",top:"33%", left:"4%",color:'gray'}} size  = {16} name='search1'/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor:"#3D3D3D",
    alignSelf:"center",
    height: "1%",
    width:"95%",
    borderWidth: 1,
    padding: "5%",
    borderRadius: 10,
    margin: 1,
    fontSize: 20,
    borderColor:"#3D3D3D",
    shadowColor:'black',
    shadowOffset:{width:1,height:1},
    shadowOpacity:1
    
  }
});

export default SearchBar;

