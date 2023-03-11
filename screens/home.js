import React from "react";
import { Button, StyleSheet,Text, View } from "react-native";
import * as Font from 'expo-font'
import { globalStyles } from "../styles/global";
export default function Home({ navigation }){
    
    const pressHandler = ()=>{
       navigation.navigate('Review');
        //navigation.push('Review')
    }
    return ( 
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='go to review details' onPress={pressHandler} />
        </View>
     );
}

