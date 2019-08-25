import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconNAme: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Haze",
    Thunderstorm: "Just don't go outside."
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "HazeDrizzle",
    subtitle: "Just don't go outside."
  },
  Rain: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Rain",
    subtitle: "Just don't go outside."
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "Just don't go outside."
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Haze",
    Atmosphere: "Just don't go outside."
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Clear",
    subtitle: "Just don't go outside."
  },
  Cloud: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Cloud",
    subtitle: "Just don't go outside."
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist",
    subtitle: "Just don't go outside."
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Dust",
    subtitle: "Just don't go outside."
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside."
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}
    >
      <View style={styles.halfContainer}>
        <StatusBar barStyle="white-content" />
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={95}
          color="white"
        />
        <Text style={styles.tempText}>{temp}oC</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>
          {weatherOptions[condition].subtitle}
        </Text>
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
    alignItems: "center",
    marginBottom: 15
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "400"
  },
  subTitle: {
    color: "white",
    fontSize: 23,
    fontWeight: "600"
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
});
