import React from "react";
import { StyleSheet,Text, View } from "react-native";
import * as Font from 'expo-font'
import { globalStyles } from "../styles/global";
export default function Home(){
    return ( 
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
        </View>
     );
}

