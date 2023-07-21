import { View, Text,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SingleItem({data}) {
  return (
    <View style={styles.rect2Stack}>
    <View style={styles.rect2}>
      <Text style={styles.maison}>Maison</Text>
      <Text style={styles.maisonAvecJardin}>Maison avec jardin</Text>
      <View style={styles.button3Row}>
        <Text
          style={{
            left: 210,
            top: 40,
            fontSize: 20,

            color: "rgba(16,77,105,100)",
            fontFamily: "Hoefler",
            textDecorationLine: "underline",
          }}
          onPress={() => props.navigation.navigate("profil")}
        >
          Profil
        </Text>
      </View>
      <Image
        source={require("../assets/House-PNG-Picture.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <MaterialButtonPrimary5
        onPress={() => props.navigation.navigate("details")}
        style={styles.materialButtonPrimary5}
      ></MaterialButtonPrimary5>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    rect2Stack: {
        marginTop: windowHeight * 0.14,
        width: windowWidth * 0.8, // Responsive width
        height: windowHeight * 0.7, // Responsive height
        alignItems: "center",
        marginLeft: windowWidth * 0.1,
    },
    rect2: {
        top: -75,
        left: 5,
        width: "100%",
        height: "110%",
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
      maison: {
        fontFamily: "Hoefler",
        color: "#104d69",
        fontSize: 29,
        marginTop: 342,
        marginLeft: 15,
      },
      maisonAvecJardin: {
        fontFamily: "Hoefler",
        color: "#104d69",
        fontSize: 14,
        marginTop: 12,
        marginLeft: 15,
      },
      button3Row: {
        height: 46,
        flexDirection: "row",
        marginTop: 14,
        marginLeft: 24,
        marginRight: 27,
      },
})