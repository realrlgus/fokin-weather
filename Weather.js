import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "안개가 꼇어요",
    subtitle: "운전 및 이동시 주의하세요!"
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "폭풍우가 몰아치고 있어요",
    subtitle: "집밖에 나가지 않는걸 추천드려요"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "이슬비가 내려요",
    subtitle: "우산쓰고 산책 어때요?"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "비가 내려요",
    subtitle: "우산 챙기는 걸 잊지 마세요!"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "눈이 내려요",
    subtitle: "눈이 많이 쌓이면 눈사람을 만들어 볼까요?"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "기압",
    subtitle: "기압?"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "맑은 날씨에요!",
    subtitle: "맑은 날씨와 함께 산책 어떠신가요?"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "구름이 꼈어요",
    subtitle: "비가 올지도 모르니 우산을 챙겨봐요"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "안개가 꼇어요",
    subtitle: "운전 및 이동시 주의하세요!"
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "안개가 꼇어요",
    subtitle: "운전 및 이동시 주의하세요!"
  },

  Dust: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "안개가 꼇어요",
    subtitle: "운전 및 이동시 주의하세요!"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "안개가 꼇어요",
    subtitle: "운전 및 이동시 주의하세요!"
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "미세먼지가 많아요",
    subtitle: "중국에게 감사하자구요!"
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "화산재가 많아요",
    subtitle: "어디선가 화산이 폭발했나봐요!"
  },
  Squall: {
    iconName: "weather-pouring",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "스콜이 와요",
    subtitle: "지나갈때까지 실내에 있는게 좋겠어요!"
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "태풍이 지나가요",
    subtitle: "집안에서 철저히 대비하는게 좋겠어요!"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        ></MaterialCommunityIcons>
        <Text style={styles.temp}>{temp}&#8451;</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Smoke",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 15,
    alignItems: "flex-start"
  }
});
