import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Stack} from "../stack/Stack";
import {User} from "../../screens/user/User";

export const Tab = () => {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator id='tabs' screenOptions={{ headerShown: false, tabBarIcon: () => null }}>
                <Tab.Screen name="Stack" component={Stack} />
                <Tab.Screen name="User" component={User} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}