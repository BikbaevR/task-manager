import {NavigationContainer} from "@react-navigation/native";
import React, {useContext} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Stack} from "../stack/Stack";
import {User} from "../../screens/user/User";
import {AuthContext, UserProvider} from "../../contexts/user/UserProvider";
import {Login} from "../../screens/login/Login";

const TabNavigator = createBottomTabNavigator();

export const Tab = () => {



    return (
        <UserProvider>

                <Tabs/>

        </UserProvider>
    );
}

const Tabs = () => {
    const { authorized } = useContext(AuthContext);
    if (!authorized) {
        return (
            <Login />
        );
    }

    return (
        <NavigationContainer>
            <TabNavigator.Navigator id="tabs" screenOptions={{ headerShown: false, tabBarIcon: () => null }}>
                <TabNavigator.Screen name="Stack" component={Stack} />
                <TabNavigator.Screen name="User" component={User} />
            </TabNavigator.Navigator>
        </NavigationContainer>
    );



}