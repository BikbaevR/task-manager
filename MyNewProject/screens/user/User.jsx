import {Text, View} from "react-native";
import React from "react";
import { styles } from './Style'

export const User = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>User Screen</Text>
        </View>
    );
}