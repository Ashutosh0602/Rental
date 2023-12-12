import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import MapStyle from "../assets/mapStyle.json";
import markerIMG from "../assets/destinationMarker.png";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAP_API_KEY } from "@env";

const Map = () => {
  return (
    <>
      {/* <Text>Hello world</Text> */}
      <MapView
        mapType="mutedStandard"
        style={{
          width: "100%",
          height: "100%",
        }}
        customMapStyle={MapStyle}
        initialRegion={{
          latitude: 28.7076815168473,
          longitude: 77.09802188043834,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 28.7076815168473,
            longitude: 77.09802188043834,
          }}
          image={markerIMG}
          title="destination"
          identifier="destination"
          anchor={{
            x: 0.5,
            y: 0.5,
          }}
        />
      </MapView>
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
