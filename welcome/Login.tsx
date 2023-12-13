import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../assets/car-rental.png";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import cssVariables from "../utilities/cssVariables";
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Login = (): JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const userLogin = () => {
    //   loginUser({
    //     email,
    //     password,
    //   });
    navigation.navigate("ApplicationWrap");
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <Image style={[styles.rentify]} source={image} />
      <Text style={styles.headingText}>Welcome!</Text>
      <Text style={styles.text}>Sign in to Continue</Text>

      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Input
            onChangeText={onChangeEmail}
            keyboardType="email-address"
            value={email}
            placeholder="Your Email"
            // onChangeText={(text) => setEmail(text)}
          />
          <Input
            onChangeText={onChangePassword}
            keyboardType="ascii-capable"
            value={password}
            placeholder="Your Password"
            secureTextEntry={true}
          />
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity
        onPress={() => {
          userLogin();
        }}
        style={[styles.login]}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>LOGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: cssVariables.paddingSmall,
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  headingText: {
    fontFamily: "Poppin-Regular",
    fontSize: cssVariables.textXLarge,
    marginTop: cssVariables.marginMedium,
    textAlign: "center",
  },
  text: {
    fontFamily: "Poppin-Medium",
    opacity: 0.5,
    marginLeft: 5,
    letterSpacing: 0.5,
    textAlign: "center",
    marginTop: cssVariables.marginXSmall,
  },
  login: {
    width: "100%",
    marginBottom: cssVariables.marginMedium,
    alignItems: "center",
    padding: cssVariables.paddingSmall,
    borderRadius: 12,
    fontSize: cssVariables.textMedium,
    color: "red",
    fontFamily: "Poppin-SemiBold",
    backgroundColor: "#000",
  },
  rentify: {
    height: 36,
    width: 36,
    alignSelf: "center",
  },
});
