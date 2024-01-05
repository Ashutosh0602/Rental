import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { BottomSheet, Button, ListItem } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CarCorousel from "./CarCorousel";
import { Ionicons } from "@expo/vector-icons";

const ButtomSlider = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(true);
  const list = [
    { title: "List Item 1" },
    { title: "List Item 2" },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "red" },
      titleStyle: { color: "white" },
      onPress: () => setIsVisible(false),
    },
  ];
  return (
    <SafeAreaProvider
      style={{ backgroundColor: "#262626", position: "relative" }}
    >
      {setIsVisible ? (
        <View
          style={{
            position: "absolute",
            bottom: -700,
            left: 300,
            backgroundColor: "#EEAA2C",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Ionicons
            name="search"
            color="white"
            size={30}
            onPress={() => setIsVisible(true)}
          />
        </View>
      ) : (
        <></>
      )}
      <View>
        <BottomSheet
          isVisible={isVisible}
          backdropStyle={{ backfaceVisibility: "hidden" }}
          containerStyle={{ backgroundColor: "transparent" }}
          onBackdropPress={() => {
            isVisible == true ? setIsVisible(false) : setIsVisible(true);
          }}
        >
          <CarCorousel />
        </BottomSheet>
      </View>
    </SafeAreaProvider>
  );
};

export default ButtomSlider;

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});
