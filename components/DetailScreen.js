import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    }
  }

  render() {
    const { navigation } = this.props;
    const ToRender = navigation.getParam('toRender');

    return <ToRender />
  }
}

export default DetailScreen;
