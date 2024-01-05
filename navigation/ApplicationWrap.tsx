import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../home/Home";
import RentOut from "../rentOut/RentOut";
import Setting from "../settings/Setting";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RentNavigator from "../rentOut/RentNavigator";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ApplicationWrap = () => {
  const navigation = useNavigation();

  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          }
          return <Ionicons size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { backgroundColor: "#262626", borderColor: "#262626" },
      })}
    >
      <Tab.Screen
        name="Tab1"
        component={Home}
        options={{
          // tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={RentNavigator}
        options={{
          tabBarBadge: 0,
          tabBarBadgeStyle: { backgroundColor: "#EEAA2C" },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car" color={color} size={size} />
          ),
          // tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={Setting}
        options={{
          // tabBarBadge: 3,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
  //   return (
  // <Stack.Navigator>
  //   <Stack.Screen
  //     name="homePage"
  //     component={Home}
  //     options={{
  //       headerShown: false,
  //       animationTypeForReplace: "push",
  //       animation: "slide_from_right",
  //     }}
  //   />
  //   <Stack.Screen
  //     name="rentOutPage"
  //     component={RentOut}
  //     options={{
  //       headerShown: false,
  //       animationTypeForReplace: "push",
  //       animation: "slide_from_right",
  //     }}
  //   />
  //   <Stack.Screen
  //     name="settingPage"
  //     component={Setting}
  //     options={{
  //       headerShown: false,
  //       animationTypeForReplace: "push",
  //       animation: "slide_from_right",
  //     }}
  //   />
  // </Stack.Navigator>
  //   );
};

export default ApplicationWrap;

const styles = StyleSheet.create({});
