import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const RentOut = (): JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const width = Dimensions.get("screen").width;
  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#262626",
        height: "100%",
      }}
    >
      <View>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 30,
            color: "#EEAA2C",
            fontWeight: "500",
          }}
        >
          RentOut
        </Text>
        <Text style={{ alignSelf: "center", color: "gray" }}>
          Rent out your car in free time
        </Text>
      </View>
      {/* <ScrollView refreshControl={<RefreshControl refreshing={true} />}> */}
      <ScrollView>
        <View>
          {/* leave this space to add car in already available for rent */}
        </View>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              alignSelf: "center",
              borderColor: "#EEAA2C",
              borderWidth: 2,
              width: width * 0.83,
              borderRadius: 10,
              backgroundColor: "gray",
              paddingTop: 6,
              paddingBottom: 6,
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 20 }}
              onPress={() => navigation.navigate("rentForm")}
            >
              Add your car
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RentOut;

const styles = StyleSheet.create({});
