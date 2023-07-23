import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
} from "react-native";
import MaterialButtonPrimary2 from "../components/MaterialButtonPrimary2";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
function Add(props) {
  const [isFontLoaded, setFontLoaded] = useState(false);

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
      <View style={styles.image1Stack}>
        <ImageBackground
          source={require("../assets/wallpaperflare.com_wallpaper.jpg")}
          resizeMode="contain"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <View style={styles.rect2}>
            <Text style={styles.sidentifier1}>Ajouter</Text>
            <Text style={styles.entrezVotreEMail1}>Entrez votre E-mail:</Text>
            <TextInput
              placeholder="     Email"
              textBreakStrategy="highQuality"
              autoCapitalize="words"
              keyboardType="email-address"
              returnKeyType="next"
              style={styles.textInput1}
            ></TextInput>
            <Text style={styles.entrezVotreEMail2}>
              Entrew votre Mot de passe:
            </Text>
            <TextInput
              placeholder="     Mot de passe"
              textBreakStrategy="highQuality"
              autoCapitalize="words"
              keyboardType="email-address"
              returnKeyType="next"
              style={styles.textInput2}
            ></TextInput>
            <MaterialButtonPrimary2
              style={styles.materialButtonPrimary1}
            ></MaterialButtonPrimary2>
          </View>
        </ImageBackground>
        <View style={styles.rect1}></View>
        <Image
          source={require("../assets/rect.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image1: {
    top: 31,
    width: 523,
    height: 960,
    position: "absolute",
    left: 0,
  },
  image1_imageStyle: {
    opacity: 0.43,
  },
  rect2: {
    width: 301,
    height: 452,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 18,
    marginTop: 260,
    marginLeft: 120,
  },
  sidentifier1: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 29,
    marginTop: 17,
    marginLeft: 90,
  },
  entrezVotreEMail1: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginTop: 97,
    marginLeft: 16,
  },
  textInput1: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 38,
    width: 280,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 21,
    marginLeft: 16,
  },
  entrezVotreEMail2: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginTop: 13,
    marginLeft: 19,
  },
  textInput2: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 38,
    width: 280,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 17,
    marginLeft: 9,
  },
  materialButtonPrimary1: {
    height: 63,
    width: 236,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 12,
    marginTop: 25,
    marginLeft: 31,
  },
  rect1: {
    top: 0,
    width: 293,
    height: 172,
    position: "absolute",
    backgroundColor: "#104d69",
    borderRadius: 76,
    left: 119,
  },
  image: {
    top: 21,
    left: 169,
    width: 194,
    height: 190,
    position: "absolute",
  },
  image1Stack: {
    width: 523,
    height: 991,
    marginTop: -78,
    marginLeft: -80,
  },
});

export default Add;
