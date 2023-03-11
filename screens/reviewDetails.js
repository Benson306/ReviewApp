import React from "react";
import { Button, StyleSheet,Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({route, navigation}){
    // const handleBack = () =>{
    //     navigation.goBack();
    // }

    const { title, rating, body} = route.params;
    return ( 
        <View style={globalStyles.container}>
            <Text>{title}</Text>
            <Text>{body}</Text>
            <Text>{rating}</Text>
            {/* <Button title="Go to Home" onPress={handleBack} /> */}
        </View>
     );
}

