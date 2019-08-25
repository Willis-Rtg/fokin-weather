import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconNAme: "weather-lightning",
    gradient: ["#373B44", "#4286f4"]
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Rain: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"]
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"]
  },
  Cloud: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"]
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside."
  }
};

export default function Weather({ temp }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions["Haze"].gradient}
    >
      <View style={styles.halfContainer}>
        <StatusBar barStyle="white-content" />
        <MaterialCommunityIcons
          name={weatherOptions["Haze"].iconName}
          size={95}
          color="white"
        />
        <Text style={styles.tempText}>{temp}oC</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text></Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm ",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  tempText: {
    fontSize: 35,
    color: "white"
  },
  halfContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  }
});
