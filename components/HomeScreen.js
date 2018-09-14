import React, { Component } from "react";
import {
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet
} from "react-native";
import tutorials from "../constants/tutorials";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Tutorials"
  };

  navigate = (routeName, title, toRender) => {
    this.props.navigation.navigate(routeName, {
      title,
      toRender
    });
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {tutorials.map(tutorial => (
          <TouchableOpacity
            key={tutorial.title}
            style={styles.row}
            onPress={() => {
              this.navigate("Detail", tutorial.title, tutorial.toRender);
            }}
          >
            <Text>{tutorial.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  row: {
    padding: 20,
    borderStyle: "solid",
    borderColor: "#ccc",
    borderBottomWidth: 1
  }
});

export default HomeScreen;
