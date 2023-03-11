import React, { useState } from "react";
import { Button, FlatList, Keyboard, Modal, StyleSheet,Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import * as Font from 'expo-font'
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from "./ReviewForm";


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

    const [modalOpen, setModalOpen] = useState(false);

    const addReview = (reviews)=>{
        reviews.key = Math.random().toString();
        setReviews((currentReviews)=>{
            return [reviews,...currentReviews];
        })

        setModalOpen(false);
    }

    return ( 
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
            {/* <Button title='go to review details' onPress={pressHandler} /> */}
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                            name="close" 
                            size={24} 
                            style={{...styles.modalToggle, ...styles.modalClose}}
                            onPress={()=> setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
 
            <MaterialIcons 
                name="add" 
                size={24} 
                style={styles.modalToggle}
                onPress={()=> setModalOpen(true)}
            />

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

const styles = StyleSheet.create({
    modalToggle:{
        marginBottom: 10,
        borderWidth:1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 1,
        alignSelf:'center'
    },
    modalClose:{
        marginTop: 20,
        marginBottom: 0
    },
    modalContent:{
        flex:1,
        padding:10
    }
})