import React, { useState } from "react";
import { Button, FlatList, StyleSheet,Text, TouchableOpacity, View } from "react-native";
import * as Font from 'expo-font'
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
export default function Home({ navigation }){
    
    // const pressHandler = ()=>{
    //    navigation.navigate('Review');
    //     //navigation.push('Review')
    // }

    const [reviews, setReviews] = useState([
        {title:'Creeds Assasin',rating: 3,body: 'lorem ipsum', key: '1'},
        {title:'Forest Gumpp',rating: 5,body: 'lorem ipsum', key: '2'},
        {title:'American Made',rating: 4,body: 'lorem ipsum', key: '3'}
    ])
    return ( 
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
            {/* <Button title='go to review details' onPress={pressHandler} /> */}
            <FlatList 
                data={reviews}
                renderItem={({ item }) =>(
                    <TouchableOpacity onPress={()=> navigation.navigate('Review', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
     );
}

