import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import MaterialButtonPrimary4 from "../components/MaterialButtonPrimary4";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Picker } from "@react-native-picker/picker";
function Search(props) {
  const [isFontLoaded, setFontLoaded] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const loadFonts = async () => {
    await Font.loadAsync({
      // Use the actual font name here, and the path to the font file
      Hoefler: require("../assets/fonts/ufonts.com_hoefler-text.ttf"),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <View style={styles.rect1}></View>
        <Image
          source={require("../assets/rect.png")}
          resizeMode="contain"
          style={styles.imagens}
        ></Image>
      </View>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/Background-investigation-row1.png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <MaterialButtonPrimary4
            style={styles.materialButtonPrimary4}
            onPress={() => props.navigation.navigate("profil")}
          ></MaterialButtonPrimary4>
        </ImageBackground>
        <View style={styles.rect2}>
          <Text style={styles.zoneDeRecherche}>Zone de Recherche</Text>
          <TextInput
            placeholder="     Recherche"
            textBreakStrategy="highQuality"
            autoCapitalize="words"
            keyboardType="default"
            returnKeyType="next"
            style={styles.textInput1}
          ></TextInput>
          <Text placeholder="     Type" style={styles.typeDeBiens2}>
            Type de biens
          </Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={styles.typeDeBiens}
          >
            <Picker.Item
              label="Villas"
              value="Villas"
              style={styles.typeDeBiens}
            />
            <Picker.Item label="Terrain" value="Terrain" />
            <Picker.Item label="Maison" value="Maison" />
            <Picker.Item label="Appartement" value="Appartement" />
          </Picker>
          <Text
            keyboardType="numeric"
            placeholder="    Nombre"
            style={styles.nombreDePieces2}
          >
            Nombre de pièces
          </Text>
          <TextInput
            placeholder="    Nombre de pieces"
            textBreakStrategy="highQuality"
            autoCapitalize="words"
            keyboardType="numeric"
            returnKeyType="next"
            style={styles.nombreDePieces}
          ></TextInput>
          <TextInput
            placeholder="Prix"
            textBreakStrategy="highQuality"
            autoCapitalize="words"
            keyboardType="email-address"
            returnKeyType="next"
            style={styles.prix}
          ></TextInput>
          <View style={styles.textInput4Row}>
            <TextInput
              placeholder="     Min"
              textBreakStrategy="highQuality"
              autoCapitalize="words"
              keyboardType="numeric"
              returnKeyType="next"
              style={styles.textInput4}
            ></TextInput>
            <TextInput
              placeholder="     Max"
              textBreakStrategy="highQuality"
              autoCapitalize="words"
              keyboardType="numeric"
              returnKeyType="next"
              style={styles.textInput3}
            ></TextInput>
          </View>
        </View>
      </View>
      <Text style={styles.recherche}>Recherche</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button1: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
    marginTop: 127,
  },
  rect1: {
    top: 0,
    width: 293,
    height: 172,
    position: "absolute",
    backgroundColor: "#104d69",
    borderRadius: 76,
    left: 40,
  },
  imagens: {
    top: 31,
    left: 125,
    width: 134,
    height: 190,
    position: "absolute",
  },
  button2: {
    width: 48,
    height: 46,
    backgroundColor: "rgba(135,186,246,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 100,
    marginLeft: 9,
    marginTop: 128,
  },
  icon1: {
    color: "rgba(10,121,251,1)",
    fontSize: 38,
    height: 38,
    width: 38,
    marginTop: 3,
    marginLeft: 4,
  },
  buttonRow: {
    height: 162,
    flexDirection: "row",
    marginTop: -90,
    marginLeft: 10,
    marginRight: 11,
  },
  image: {
    top: 420,
    left: 0,
    width: 393,
    height: 266,
    position: "absolute",
  },
  image_imageStyle: {},
  materialButtonPrimary4: {
    height: 46,
    width: 241,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 19,
    marginTop: 24,
    marginLeft: 84,
  },
  rect2: {
    top: 0,
    left: 37,
    width: 330,
    height: 420,
    position: "absolute",
    backgroundColor: "#f7ffff",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 29,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  zoneDeRecherche: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 17,
    marginTop: 43,
    marginLeft: 87,
  },
  textInput1: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 38,
    width: 299,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 9,
    marginLeft: 15,
  },
  typeDeBiens2: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 17,

    marginTop: 12,
    marginLeft: 104,
  },
  typeDeBiens: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 40,
    width: 298,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 18,
    marginLeft: 16,
  },
  nombreDePieces2: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 17,

    marginTop: 12,
    marginLeft: 95,
  },
  nombreDePieces: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 41,
    width: 295,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 13,
    marginLeft: 18,
  },
  prix: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 20,
    width: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 18,
    marginLeft: 145,
  },
  textInput4: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 38,
    width: 92,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
  },
  textInput3: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 38,
    width: 92,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginLeft: 110,
    marginTop: 1,
  },
  textInput4Row: {
    height: 39,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 18,
    marginRight: 18,
  },
  imageStack: {
    width: 393,
    height: 632,
    marginTop: 65,
    marginLeft: -9,
  },
  recherche: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 29,
    marginTop: -677,
    marginLeft: 123,
  },
});

export default Search;
