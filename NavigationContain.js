import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './FirstScreen';
import SecondScreen from './secondScreen';
import FourthScreen from './fourthScreen';
import ThirdScreen from './thirdScreen';
import { Button } from 'react-native';
import TabContainer from './TabContainer';

export default function NavigationContain() {
const Stack = createNativeStackNavigator();

return (
                <NavigationContainer>
                                <TabContainer/>
                </NavigationContainer>
);
}