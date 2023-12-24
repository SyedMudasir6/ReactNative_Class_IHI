import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const FirstScreen = (props) => {
                const { navigation } = props

                const gotoSecondScreen = () =>{
                                navigation.navigate('ThirdScreen', {name:"ReactNative"})
                }

                return(
                                <View style={styles.mainContainer}>
                                <Text>First Screen</Text>
                                <Button title='Go to Third Screen' onPress={gotoSecondScreen}/>
                </View>
                )
                
}
const styles = StyleSheet.create({
                mainContainer: {
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                }
})

export default FirstScreen