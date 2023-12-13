import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { Cardata } from "./CarDB";
import type { carDB } from "./CarDB";

var { width, height } = Dimensions.get("window");

const CarCorousel = (): JSX.Element => {
  const RentalCard = ({ item }: any) => {
    return (
      <View style={{ paddingBottom: 20 }}>
        <Image
          source={{ uri: item.carImage }}
          style={{
            width: width * 0.8,
            height: height * 0.2,
            borderRadius: 15,
            marginBottom: 10,
          }}
        />
        <View style={{ paddingLeft: 5, paddingRight: 5 }}>
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "lightgray", fontSize: 16, fontWeight: 500 }}>
              {item.carName.toUpperCase()} [{item.carNumber}]
            </Text>
            <Text style={{ color: "lightgray", fontSize: 20 }}>
              {/* {item.engineType} */}
            </Text>
          </View>
          <View>
            <Text numberOfLines={1} style={{ color: "gray" }}>
              {item.carAddress}
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "gray" }}>📍{item.distance}</Text>
            <Text style={{ color: "lightgray", fontSize: 20 }}>
              <Text style={{ color: "#EEAA2C" }}>$</Text>
              {item.price}
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity style={styles.button}>
              <Text>Navigate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.book}>
              <Text>Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: "#262626",
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <Carousel
        data={Cardata}
        renderItem={({ item }) => <RentalCard item={item} />}
        inactiveSlideOpacity={0.6}
        firstItem={1}
        sliderWidth={width}
        itemWidth={width * 0.8}
        enableSnap={true}
        enableMomentum={false}
        activeSlideAlignment="center"
      />
    </View>
  );
};

export default CarCorousel;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 120,
    borderRadius: 10,
  },
  book: {
    alignItems: "center",
    backgroundColor: "#EEAA2C",
    padding: 10,
    width: 120,
    borderRadius: 10,
  },
});
