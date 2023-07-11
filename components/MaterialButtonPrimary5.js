import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonPrimary5(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <Text style={styles.caption}>Afficher plus</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(16,77,105,100)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  caption: {
    color: "#fff",
    fontSize: 14,
  },
});

export default MaterialButtonPrimary5;
