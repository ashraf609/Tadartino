import React, { Component, useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Feather } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Swiper from "react-native-swiper";
function Details(props) {
  const [isFontLoaded, setFontLoaded] = useState(false);
  const renderPagination = (index, total, context) => {
    return null; // Return null to hide the pagination buttons
  };
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
      <View style={styles.rect1StackStackStack}>
        <View style={styles.rect1StackStack}>
          <View style={styles.rect1Stack}>
            <View style={styles.rect1}>
              <Text style={styles.maison1}>Maison</Text>
              <Text style={styles.maisonAvecJardin1}>Maison avec jardin</Text>
              <View style={styles.button3Row}>
                <TouchableOpacity style={styles.button3}>
                  <Feather
                    name="home"
                    size={35}
                    style={styles.iconRow}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.maisonAvecJardin2}>
                  Salon et sejour de 80 m²
                </Text>
              </View>
              <View style={styles.button4Row}>
                <TouchableOpacity style={styles.button4}>
                  <Icon
                    name="bed"
                    size={34}
                    style={styles.iconRow}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.maisonAvecJardin3}>
                  3 lit de 60 m² avec des &nbsp;balcons
                </Text>
              </View>
              <View style={styles.button5Row}>
                <TouchableOpacity style={styles.button5}>
                  <Icon
                    name="bath"
                    size={34}
                    style={styles.iconRow}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.maisonAvecJardin4}>2 salle de bains</Text>
              </View>
              <View style={styles.button6Row}>
                <TouchableOpacity style={styles.button6}>
                  <Icons
                    name="hanger"
                    size={34}
                    style={styles.iconRow}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.maisonAvecJardin5}>
                  Une Grande Cuisine bien equipée
                </Text>
              </View>
            </View>
            <Swiper
              style={styles.wrapper}
              showsButtons
              pagination="false"
              navigation="false"
              renderPagination={renderPagination}
              loop={false}
            >
              <Image
                source={require("../assets/House-PNG-Picture.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
              <Image
                source={require("../assets/House-PNG-Picture.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
              <Image
                source={require("../assets/House-PNG-Picture.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
              <Image
                source={require("../assets/House-PNG-Picture.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
            </Swiper>
          </View>
          <TouchableOpacity style={styles.button1}>
            <FeatherIcon name="user" style={styles.icon1}></FeatherIcon>
          </TouchableOpacity>
          <View style={styles.button2Stack}>
            <TouchableOpacity style={styles.button2}></TouchableOpacity>
            <EvilIconsIcon name="search" style={styles.icon2}></EvilIconsIcon>
          </View>
        </View>
        <View style={styles.rect2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  rect1: {
    top: 26,
    left: -1,
    width: 313,
    height: 640,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 43,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.52,
    shadowRadius: 0,
    overflow: "visible",
  },
  maison1: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 29,
    marginTop: 235,
    marginLeft: 10,
  },
  maisonAvecJardin1: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginTop: 43,
    marginLeft: 10,
  },
  iconRow: {
    marginLeft: 7,
    marginTop: 3,
  },
  button3: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
  },
  maisonAvecJardin2: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginLeft: 42,
    marginTop: 15,
  },
  button3Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 15,
    marginRight: 90,
  },
  button4: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
  },
  maisonAvecJardin3: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginLeft: 42,
    marginTop: 14,
  },
  button4Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 15,
    marginRight: 90,
  },
  button5: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
  },
  maisonAvecJardin4: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginLeft: 42,
    marginTop: 15,
  },
  button5Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 15,
    marginRight: 90,
  },
  button6: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
  },
  maisonAvecJardin5: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginLeft: 42,
    marginTop: 5,
  },
  button6Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 15,
    marginRight: 90,
  },
  image1: {
    top: 0,
    left: 26,
    width: 244,
    height: 312,
    position: "absolute",
  },
  rect1Stack: {
    top: 44,
    left: 34,
    width: 313,
    height: 641,
    position: "absolute",
  },
  button1: {
    top: 3,
    left: 305,
    width: 48,
    height: 46,
    position: "absolute",
    backgroundColor: "rgba(135,186,246,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 100,
  },
  icon1: {
    color: "rgba(10,121,251,1)",
    fontSize: 38,
    height: 38,
    width: 38,
    marginTop: 4,
    marginLeft: 5,
  },
  button2: {
    top: 3,
    left: 0,
    width: 49,
    height: 46,
    position: "absolute",
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
  },
  icon2: {
    top: 0,
    left: 4,
    position: "absolute",
    color: "rgba(7,116,243,1)",
    fontSize: 40,
  },
  button2Stack: {
    top: 0,
    left: 0,
    width: 49,
    height: 49,
    position: "absolute",
  },
  rect1StackStack: {
    top: 133,
    left: 0,
    width: 353,
    height: 685,
    position: "absolute",
  },
  rect2: {
    top: 0,
    width: 238,
    height: 136,
    position: "absolute",
    backgroundColor: "#104d69",
    borderRadius: 76,
    left: 58,
  },
  rect1StackStackStack: {
    width: 353,
    height: 818,
    marginTop: -78,
    marginLeft: 11,
  },
});

export default Details;
