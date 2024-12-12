import {Text, View} from "react-native";
import React from "react";
import { styles } from './Style'

export const CreateTask = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create Task</Text>
        </View>
    );
}