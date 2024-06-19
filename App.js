// App.js
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Image, StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import AlphabetScreen from "./src/screens/AlphabetScreen";
import WordsScreen from "./src/screens/WordsScreen";
import SentencesScreen from "./src/screens/SentencesScreen";
import LanguageScreen from "./src/screens/LanguageScreen";
import DrawingScreen from "./src/screens/DrawingScreen"; // Import the DrawingScreen

const Stack = createStackNavigator();

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.logo}
        source={require("./assets/favicon.png")} // Make sure you have a logo image in the specified path
      />
      <Text style={styles.headerTitle}>Welcome</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: () => <CustomHeader /> }}
        />
        <Stack.Screen
          name="Alphabet"
          component={AlphabetScreen}
          options={{ title: "Alphabets" }}
        />
        <Stack.Screen
          name="Words"
          component={WordsScreen}
          options={{ title: "Words" }}
        />
        <Stack.Screen
          name="Sentences"
          component={SentencesScreen}
          options={{ title: "Sentences" }}
        />
        <Stack.Screen
          name="Language"
          component={LanguageScreen}
          options={{ title: "Language Selection" }}
        />
        <Stack.Screen
          name="Drawing"
          component={DrawingScreen}
          options={{ title: "Draw Hindi Letters" }} // Add the DrawingScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000", // Updated to black background
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red", // Updated to red text color
  },
});

export default App;
