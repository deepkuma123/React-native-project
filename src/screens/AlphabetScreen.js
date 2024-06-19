import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// const EnglishAlphabets = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];
// const HindiAlphabets = [
//   "अ",
//   "आ",
//   "इ",
//   "ई",
//   "उ",
//   "ऊ",
//   "ए",
//   "ऐ",
//   "ओ",
//   "औ",
//   "अं",
//   "अः",
//   "क",
//   "ख",
//   "ग",
//   "घ",
//   "ङ",
//   "च",
//   "छ",
//   "ज",
//   "झ",
//   "ञ",
//   "ट",
//   "ठ",
//   "ड",
//   "ढ",
//   "ण",
//   "त",
//   "थ",
//   "द",
//   "ध",
//   "न",
//   "प",
//   "फ",
//   "ब",
//   "भ",
//   "म",
//   "य",
//   "र",
//   "ल",
//   "व",
//   "श",
//   "ष",
//   "स",
//   "ह",
// ];

const AlphabetScreen = ({ route,navigation }) => {
  // const { language } = route.params;
  // const alphabets = language === "English" ? EnglishAlphabets : HindiAlphabets;

  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.title}>{language} Alphabets</Text>
  //     <FlatList
  //       data={alphabets}
  //       keyExtractor={(item) => item}
  //       renderItem={({ item }) => <Text style={styles.alphabet}>{item}</Text>}
  //     />
  //   </View>
  // );

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
          onPress={() => navigation.navigate("Drawing")} // Navigate to LanguageScreen
        >
          <Text style={styles.buttonText}>अक्षर ज्ञान </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>मात्रा ज्ञान </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>शब्द ज्ञान </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Sentences", { language: "Hindi" })
          }
        >
          <Text style={styles.buttonText}>वाक्य ज्ञान </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>कहानी पढ़े </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>रफ़्तार बढ़ाओ </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   alphabet: {
//     fontSize: 32,
//     margin: 10,
//   },
// });

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
    marginTop: -120,
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#4FC3F7",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AlphabetScreen;
