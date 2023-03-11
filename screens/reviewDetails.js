import React from "react";
import { Button, StyleSheet,Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({navigation}){
    const handleBack = () =>{
        navigation.goBack();
    }
    return ( 
        <View style={globalStyles.container}>
            <Text>Review Details Screen</Text>
            <Button title="Go to Home" onPress={handleBack} />
        </View>
     );
}

