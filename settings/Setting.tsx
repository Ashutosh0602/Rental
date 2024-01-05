import {
  Dimensions,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Setting = () => {
  const width = Dimensions.get("screen").width;

  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#262626",
        height: "100%",
      }}
    >
      {/* <StatusBar hidden={true} /> */}
      <Text>Setting</Text>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({});
