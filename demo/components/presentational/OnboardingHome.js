import React from "react";
import { Image, Button, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import { responsiveHeight } from "react-native-responsive-dimensions";
import LargeText from "./LargeText";
import Colors from "@constants/Colors";

export default function OnboardingHome(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")} />
      <LargeText>{`Let's get you set up with a secure way to store this land!`}</LargeText>
      <View style={styles.buttonView}>
        <Button title="Get started" onPress={props.onPress} />
      </View>
    </View>
  );
}

OnboardingHome.propTypes = {
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    flexDirection: "row",
    marginTop: responsiveHeight(5),
  },
});
