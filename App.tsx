import { StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/Navigation";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import RentOut from "./rentOut/RentOut";
import Setting from "./settings/Setting";

const Tab = createBottomTabNavigator();

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
  // return (
  //   <NavigationContainer>
  //     <Tab.Navigator
  //       screenOptions={({ route }) => ({
  //         tabBarIcon: ({ focused, color, size }) => {
  //           let iconName;

  //           if (route.name === "Home") {
  //             iconName = focused
  //               ? "ios-information-circle"
  //               : "ios-information-circle-outline";
  //           } else if (route.name === "Settings") {
  //             iconName = focused ? "ios-list" : "ios-list-outline";
  //           }

  //           // You can return any component that you like here!
  //           return <Ionicons name={iconName} size={size} color={color} />;
  //         },
  //         tabBarActiveTintColor: "white",
  //         tabBarInactiveTintColor: "gray",
  //         tabBarShowLabel: false,
  //         headerShown: false,
  //         tabBarStyle: { backgroundColor: "#262626", borderColor: "#262626" },
  //       })}
  //     >
  //       <Tab.Screen
  //         name="Tab1"
  //         component={Navigation}
  //         options={{
  //           // tabBarBadge: 3,
  //           tabBarIcon: ({ color, size }) => (
  //             <Ionicons name="home" color={color} size={size} />
  //           ),
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Tab2"
  //         component={RentOut}
  //         options={{
  //           tabBarBadge: 0,
  //           tabBarBadgeStyle: { backgroundColor: "#EEAA2C" },
  //           tabBarIcon: ({ color, size }) => (
  //             <Ionicons name="car" color={color} size={size} />
  //           ),
  //           // tabBarStyle: { display: "none" },
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Tab3"
  //         component={Setting}
  //         options={{
  //           // tabBarBadge: 3,
  //           tabBarIcon: ({ color, size }) => (
  //             <Ionicons name="menu" color={color} size={size} />
  //           ),
  //         }}
  //       />
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
