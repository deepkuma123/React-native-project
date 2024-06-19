// src/screens/LanguageScreen.js
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const LanguageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>LOGO</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Alphabet")}
        >
          <Text style={styles.buttonText}>हिंदी</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B3E5FC",
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#B3E5FC",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    fontSize: 24,
    color: "#fff",
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#4FC3F7",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default LanguageScreen;
