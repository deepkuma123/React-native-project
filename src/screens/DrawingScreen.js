import React, { useState } from "react";
import { View, Button } from "react-native";
import { StyleSheet, Text, Dimensions } from "react-native";
import CustomDrawingCanvas from "../components/DrawingComponent";

const { width } = Dimensions.get("window");

const hindiAlphabet = [
  "अ",
  "आ",
  "इ",
  "ई",
  "उ",
  "ऊ",
  "ऋ",
  "ए",
  "ऐ",
  "ओ",
  "औ",
  "अं",
  "अः",
  "क",
  "ख",
  "ग",
  "घ",
  "ङ",
  "च",
  "छ",
  "ज",
  "झ",
  "ञ",
  "ट",
  "ठ",
  "ड",
  "ढ",
  "ण",
  "त",
  "थ",
  "द",
  "ध",
  "न",
  "प",
  "फ",
  "ब",
  "भ",
  "म",
  "य",
  "र",
  "ल",
  "व",
  "श",
  "ष",
  "स",
  "ह",
  "क्ष",
  "त्र",
  "ज्ञ",
];

const DrawingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextLetter = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hindiAlphabet.length);
  };

  const handlePreviousLetter = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + hindiAlphabet.length) % hindiAlphabet.length
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Text style={styles.headerText}>अक्षर ज्ञान</Text>
        </View>
        <Text style={styles.text}>{hindiAlphabet[currentIndex]}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>अक्षर बनाए</Text>
        <CustomDrawingCanvas />
        <View style={styles.buttonContainer}>
          <Button
            title="Previous Letter"
            onPress={handlePreviousLetter}
            disabled={currentIndex === 0}
          />
          <Button
            title="Next Letter"
            onPress={handleNextLetter}
            disabled={currentIndex === hindiAlphabet.length - 1}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA",
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4FC3F7",
  },
  headerText: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  section: {
    flex: 1,
    margin: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#1E88E5",
    color: "#FFFFFF",
    padding: 10,
  },
  canvas: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "red",
    marginLeft: 105,
    justifyContent: "center",
    alignContent: "center",
    fontSize: 200,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default DrawingScreen;
