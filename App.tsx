import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/Navigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppin-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppin-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppin-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppin-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppin-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppin-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppin-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });

  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
