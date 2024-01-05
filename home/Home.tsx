import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import cssVariables from "../utilities/cssVariables";
import Map from "../components/Map";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ButtomSlider from "./ButtomSlider";
import BottomSlider from "./BottomSlider";
import { StatusBar } from "expo-status-bar";

const Home = (): JSX.Element => {
  return (
    <SafeAreaProvider style={styles.container}>
      {/* <BottomSlider /> */}
      <View style={styles.slider}>
        <ButtomSlider />
      </View>
      <Map />
    </SafeAreaProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  slider: {
    position: "absolute",
    zIndex: 100,
  },
});
