import React, { Component } from 'react';
import { TouchableOpacity, ScrollView, View, Text, Button, StyleSheet } from 'react-native';
import tutorials from '../constants/tutorials';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Chart Tutorial"
  }

  navigate = (routeName, toRender) => {
    this.props.navigation.navigate(routeName, { title: 'SVG Basics', toRender});
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        { tutorials.map(tutorial => (<TouchableOpacity onPress={ () => {this.navigate('Detail', tutorial.toRender)} }><Text>{tutorial.title}</Text></TouchableOpacity>)) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
