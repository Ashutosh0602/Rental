import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import SelectDropdown from "react-native-select-dropdown";
import { Icon, ScreenWidth } from "@rneui/base";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const RentForm = (): JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  StatusBar.setBackgroundColor("#262626");
  const height = StatusBar.currentHeight;

  const [image, setImage] = React.useState<string | null>(null);

  // Function for accepting image
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView
      style={{
        marginTop: height,
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
            marginBottom: 30,
          }}
        >
          Add Car Details
        </Text>
      </View>
      <ScrollView>
        <View>
          <TouchableOpacity
            onPress={pickImage}
            style={styles.uploadBtnContainer}
          >
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <>
                <Icon
                  type="font-awesome"
                  name="user-plus"
                  color="lightgray"
                  size={16}
                />
                <Text style={{ alignSelf: "center", color: "lightgray" }}>
                  Add your car Image
                </Text>
              </>
            )}
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15 }}>
          <Input
            label="Car Model"
            labelStyle={{
              color: "gray",
              borderColor: "lightgray",
            }}
            inputStyle={{ color: "lightgray" }}
            inputContainerStyle={{
              borderColor: "lightgray",
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 10,
            }}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Input
            label="Car Number"
            returnKeyType="next"
            keyboardType="numbers-and-punctuation"
            labelStyle={{
              color: "gray",
              borderColor: "lightgray",
            }}
            inputStyle={{ color: "lightgray" }}
            inputContainerStyle={{
              borderColor: "lightgray",
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 10,
            }}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Input
            label="Car Adress"
            returnKeyType="next"
            labelStyle={{
              color: "gray",
              borderColor: "lightgray",
            }}
            inputStyle={{ color: "lightgray" }}
            inputContainerStyle={{
              borderColor: "lightgray",
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 10,
            }}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Input
            label="Owner's Name"
            returnKeyType="next"
            labelStyle={{
              color: "gray",
              borderColor: "lightgray",
            }}
            inputStyle={{ color: "lightgray" }}
            inputContainerStyle={{
              borderColor: "lightgray",
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 10,
            }}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Input
            label="Contact Number"
            keyboardType="phone-pad"
            returnKeyType="next"
            labelStyle={{
              color: "gray",
              borderColor: "lightgray",
            }}
            inputStyle={{ color: "lightgray" }}
            inputContainerStyle={{
              borderColor: "lightgray",
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 10,
            }}
          />
        </View>
        {/* <View style={{ marginTop: 15 }}>
          <SelectDropdown
            data={["Diesel/petrol", "Electric", "Hybrid"]}
            onSelect={() => {}}
          />
        </View> */}
        <View style={{ marginTop: 15, marginBottom: 50 }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              alignSelf: "center",
              borderColor: "#EEAA2C",
              borderWidth: 2,
              width: ScreenWidth * 0.83,
              borderRadius: 10,
              backgroundColor: "#EEAA2C",
              paddingTop: 6,
              paddingBottom: 6,
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 20, color: "whitesmoke" }}
              onPress={() => navigation.pop(1)}
            >
              Add your car
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RentForm;

const styles = StyleSheet.create({
  uploadBtnContainer: {
    height: 180,
    width: ScreenWidth * 0.9,
    borderStyle: "dashed",
    borderColor: "lightgray",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    overflow: "hidden",
    alignSelf: "center",
  },
});
