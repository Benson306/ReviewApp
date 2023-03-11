import React from "react";
import { Button, StyleSheet,Text, View, Image, ImageBackground } from "react-native";
import Card from "../shared/Card";
import { globalStyles,images } from "../styles/global";


export default function ReviewDetails({route, navigation}){
    // const handleBack = () =>{
    //     navigation.goBack();
    // }

    const { title, rating, body} = route.params;
    return ( 
        <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating</Text>
                    <Image source={images.ratings[rating]} />
                </View>
                {/* <Button title="Go to Home" onPress={handleBack} /> */}
            </Card>
        </ImageBackground>
        
     );
}
const styles = StyleSheet.create({
    rating:{
        flexDirection: 'row',
        justifyContent:'center',
        paddingTop:16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})
