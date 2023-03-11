import React from "react";
import { StyleSheet,Text, View } from "react-native";
import * as Font from 'expo-font'

export default function Home(){
    return ( 
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        padding:40
    },
    titleText:{
        fontFamily: 'sano-bold',
        fontSize:18
    }
})
