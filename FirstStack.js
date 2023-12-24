import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './FirstScreen';
import ThirdScreen from './thirdScreen';
import { Button } from 'react-native';

export default function FirstStack() {
                const Stack = createNativeStackNavigator();

                return (
                                                <Stack.Navigator initialRouteName='FirstScreen'>
                                                                <Stack.Screen name="FirstScreen" options={{
                                                                                title: "Dashboard", headerRight: () =>
                                                                                (
                                                                                                <Button title={"Add New"} />
                                                                                )
                                                                }} component={FirstScreen} />
                                                                <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
                                                </Stack.Navigator>
                );
}