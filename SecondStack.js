import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SecondScreen from './secondScreen';
import FourthScreen from './fourthScreen';

export default function SecondStack() {
                const Stack = createNativeStackNavigator();

                return (<Stack.Navigator initialRouteName='SecondScreen'>
                                <Stack.Screen name="SecondScreen" component={SecondScreen} />
                                <Stack.Screen name="FourthScreen" component={FourthScreen} />
                </Stack.Navigator>
                );
}