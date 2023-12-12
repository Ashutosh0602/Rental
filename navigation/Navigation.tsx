import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../Store";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../welcome/Welcome";
import Login from "../welcome/Login";
import Register from "../welcome/Register";
import ApplicationWrap from "./ApplicationWrap";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar
            backgroundColor="linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(255,255,255,1) 100%)"
            barStyle="light-content"
          />
          <Stack.Navigator>
            <Stack.Screen
              component={Welcome}
              name="welcome"
              options={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal",
                animationTypeForReplace: "pop",
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="register"
              component={Register}
              options={{
                headerShown: false,
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
            />
            <Stack.Screen
              name="ApplicationWrap"
              component={ApplicationWrap}
              options={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal",
                animationTypeForReplace: "push",
                animation: "flip",
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
