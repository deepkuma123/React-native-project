import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const EnglishWords = ["Apple", "Ball", "Cat", "Dog", "Elephant"];
const HindiWords = ["सेब", "गेंद", "बिल्ली", "कुत्ता", "हाथी"];

const WordsScreen = ({ route }) => {
  const { language } = route.params;
  const words = language === "English" ? EnglishWords : HindiWords;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{language} Words</Text>
      <FlatList
        data={words}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.word}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  word: {
    fontSize: 32,
    margin: 10,
  },
});

export default WordsScreen;
