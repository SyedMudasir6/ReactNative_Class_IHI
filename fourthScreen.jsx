import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const FourthScreen = (props) => {
                const { navigation } = props

                const gotoFirstScreen = () => {
                                navigation.navigate('FirstScreen')
                }

                return(
                                <View style={styles.mainContainer}>
                                <Text>Fourth Screen</Text>
                                                <Button title='Go to First Screen' onPress={gotoFirstScreen} />

                                                <Button title='Go Back' onPress={() => navigation.pop()} />
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

export default FourthScreen