import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const SecondScreen = (props) => {
                console.log(props)
                const { navigation,route } = props
                // const{name}=route.params

                const gotoFirstScreen = () => {
                                navigation.push('FourthScreen')
                }

                return(
                                <View style={styles.mainContainer}>
                                <Text>Second Screen</Text>
                                {/* <Text>Course Name {name}</Text> */}
                                                <Button title='Go to Fourth Screen' onPress={gotoFirstScreen} />

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

export default SecondScreen