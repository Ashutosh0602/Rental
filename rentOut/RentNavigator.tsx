import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RentOut from "./RentOut";
import RentForm from "./RentForm";

const Stack = createNativeStackNavigator();

const RentNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          animationTypeForReplace: "push",
          animation: "slide_from_right",
        }}
        name="rentOut"
        component={RentOut}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          animationTypeForReplace: "pop",
          animation: "slide_from_bottom",
        }}
        name="rentForm"
        component={RentForm}
      />
    </Stack.Navigator>
  );
};

export default RentNavigator;
