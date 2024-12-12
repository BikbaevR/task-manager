// import React from 'react';
// import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
//
// // Главная страница (Home)
// function HomeScreen({ navigation }) {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Home Screen</Text>
//
//             {/* Кнопка в правом нижнем углу */}
//             <TouchableOpacity
//                 style={styles.floatingButton}
//                 onPress={() => navigation.navigate('NewPage')}
//             >
//                 <Text style={styles.floatingButtonText}>+</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }
//
// // Новая страница
// function NewPageScreen() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>This is a New Page</Text>
//         </View>
//     );
// }
//
// // Страница Details
// function DetailsScreen() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Details Screen</Text>
//         </View>
//     );
// }
//
// // Создаем Stack Navigator для Home
// const HomeStack = createStackNavigator();
// function HomeStackScreen() {
//     return (
//         <HomeStack.Navigator id='stacks' screenOptions={{ headerShown: false, tabBarIcon: () => null }}>
//             <HomeStack.Screen name="Home" component={HomeScreen} />
//             <HomeStack.Screen name="NewPage" component={NewPageScreen} />
//         </HomeStack.Navigator>
//     );
// }
//
// // Создаем Tab Navigator
// const Tab = createBottomTabNavigator();
// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator id='tabs' screenOptions={{ headerShown: false, tabBarIcon: () => null }}>
//                 <Tab.Screen name="Home" component={HomeStackScreen} />
//                 <Tab.Screen name="Details" component={DetailsScreen} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 18,
//     },
//     // Стили для кнопки
//     floatingButton: {
//         position: 'absolute',
//         bottom: 20,
//         right: 20,
//         backgroundColor: '#007BFF',
//         width: 60,
//         height: 60,
//         borderRadius: 30,
//         justifyContent: 'center',
//         alignItems: 'center',
//         elevation: 5, // Тень на Android
//         shadowColor: '#000', // Тень на iOS
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 3,
//     },
//     floatingButtonText: {
//         color: '#fff',
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
// });
