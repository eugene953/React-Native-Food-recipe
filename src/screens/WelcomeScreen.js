import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
//import { useNavigation } from '@react-navigation/native';

// create a component
const WelcomeScreen = ({navigation}) => {

    
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/images/welcome1.png")}/>
        
     <Text style={{color : "#f96163", fontSize:22, fontWeight:"bold"}}>
        40K+ Premuim Recipes
        </Text>   
        
        <Text style={{color : "#3c444c", fontSize:42, fontWeight:"bold", marginTop:25, marginBottom:25, }}>
        Cook Like A Chef
        </Text>   
        
<TouchableOpacity 
onPress={() => navigation.navigate("RecipeList")}
style={{backgroundColor:"#f96163",borderRadius:18,paddingVertical:18,width:"80%",alignItems:"center"}}>
   <Text style={{fontSize:18,color:"#fff", fontWeight:"700"}}>
    Let's Go
    </Text> 
</TouchableOpacity>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default WelcomeScreen;
