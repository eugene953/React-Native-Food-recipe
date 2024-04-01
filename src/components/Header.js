//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {FontAwesome} from "@expo/vector-icons"


// create a component
const Header = ({headerText, headerIcon}) => {
    return (
        <View style={styles.container}>
            <Text  style={{ flex: 1, fontSize: 22, fontWeight: "700" }}>
                {headerText}
                </Text>
            <FontAwesome name={headerIcon} size={24} color="#f96163"/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
});

//make this component available to the app
export default Header;
