import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Code extends Component {
  render() {
    const { style } = this.props;
    return (
      <View style={[styles.code, style]}>
        <Text style={styles.codeText}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  code: {
    marginTop: 5,
    backgroundColor: "#efefef"
  },
  codeText: {
    fontFamily: "Menlo-Regular"
  }
});

export default Code;
