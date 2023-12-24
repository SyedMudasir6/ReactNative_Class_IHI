import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstStack from './FirstStack';
import SecondStack from './SecondStack';
export default function TabContainer() {
                const Tab = createBottomTabNavigator();

                return (
                                <Tab.Navigator screenOptions={{headerShown:false}}>
                                                <Tab.Screen name="FirstStack" component={FirstStack} />
                                                <Tab.Screen name="SecondStack" component={SecondStack} />
                                </Tab.Navigator>
                );
}