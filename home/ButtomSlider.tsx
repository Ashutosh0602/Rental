import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { BottomSheet, Button, ListItem } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";

const ButtomSlider = () => {
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
    <SafeAreaProvider>
      {/* <Button
        title="Open Bottom Sheet"
        onPress={() => setIsVisible(true)}
        buttonStyle={styles.button}
      /> */}
      <BottomSheet
        // modalProps={{ visible: true }}
        isVisible={isVisible}
        backdropStyle={{ backfaceVisibility: "hidden" }}
        containerStyle={{ backgroundColor: "transparent" }}
        onBackdropPress={() => {
          isVisible == true ? setIsVisible(false) : setIsVisible(true);
        }}
      >
        <Text
          onPressIn={() => setIsVisible(false)}
          style={{
            backgroundColor: "white",
            fontSize: 50,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          Hello world
        </Text>
      </BottomSheet>
    </SafeAreaProvider>
  );
};

export default ButtomSlider;

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});
