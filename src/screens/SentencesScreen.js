import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import * as Speech from "expo-speech";


const EnglishSentences = [
  "The cat is on the mat.",
  "I love programming.",
  "It is a sunny day.",
];

const HindiSentences = [
  "बिल्ली चटाई पर है।",
  "मुझे प्रोग्रामिंग पसंद है।",
  "आज धूप है।",
];

const SentenceHighlighter = ({ sentence, spokenText, isReading }) => {
  const words = sentence.split(" ");
  return (
    <Text>
      {words.map((word, index) => (
        <Text
          key={index}
          style={{
            color:
              spokenText.trim() === word.trim() && isReading
                ? "green"
                : isReading
                ? "blue"
                : "black",
          }}
        >
          {word}{" "}
        </Text>
      ))}
    </Text>
  );
};

const SentencesScreen = ({ route }) => {
  const { language } = route.params;
  const sentences = language === "English" ? EnglishSentences : HindiSentences;
  const [spokenText, setSpokenText] = useState("");
  const [isReading, setIsReading] = useState(false);

  
  // Start text-to-speech for the sentence
  const startTts = (sentence) => {
    setSpokenText("");
    Speech.speak(sentence, {
      language: language === "English" ? "en-US" : "hi-IN",
    });
  };

  // Handle when a sentence is pressed
  const handleSentencePress = (sentence) => {
    startTts(sentence);
    setIsReading(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{language} Sentences</Text>
      <FlatList
        data={sentences}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Button title="Play" onPress={() => handleSentencePress(item)} />
            <SentenceHighlighter
              sentence={item}
              spokenText={spokenText}
              isReading={isReading}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SentencesScreen;
