import React, { Component } from "react";
import { Text, Dimensions, ScrollView, StyleSheet } from "react-native";
import Svg, {
  Defs,
  Stop,
  Ellipse,
  LinearGradient,
  RadialGradient,
  Polygon,
  Rect,
  Circle,
  Path
} from "react-native-svg";

import T from "./T";
import Code from "./Code";

class BasicCharts extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <T heading>Circle</T>
        <Svg height="100" width="100">
          <Circle cx="50" cy="50" r="50" fill="pink" />
        </Svg>
        <Code>
          {`
	<Circle
		cx="50"
		cy="50"
		r="50"
		fill="pink"
	/>
`}
        </Code>

        <T heading>Rect</T>
        <Svg width="200" height="60">
          <Rect
            x="25"
            y="5"
            width="150"
            height="50"
            fill="rgb(0,0,255)"
            strokeWidth="3"
            stroke="rgb(0,0,0)"
          />
        </Svg>
        <Code>{`
	<Rect
		x="25"
		y="5"
		width="150"
		height="50"
		fill="rgb(0,0,255)"
		strokeWidth="3"
		stroke="rgb(0,0,0)"
	/>
`}</Code>
        <T heading>Polygon</T>
        <Svg height="100" width="100">
          <Polygon
            points="40,5 70,80 25,95"
            fill="lime"
            stroke="purple"
            strokeWidth="1"
          />
        </Svg>
        <Code>{`
	<Polygon
		points="40,5 70,80 25,95"
		fill="lime"
		stroke="purple"
		strokeWidth="1"
	/>

`}</Code>
        <T heading>LinearGradient/RadialGradient</T>
        <Svg height="150" width="300">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="170" y2="0">
              <Stop offset="0" stopColor="rgb(255,255,0)" stopOpacity="0" />
              <Stop offset="1" stopColor="red" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />
        </Svg>
        <Code>{`
	<Defs>
		<LinearGradient id="grad" x1="0" y1="0" x2="170" y2="0">
			<Stop offset="0" stopColor="rgb(255,255,0)" stopOpacity="0" />
			<Stop offset="1" stopColor="red" stopOpacity="1" />
		</LinearGradient>
	</Defs>
	<Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad)" />

`}</Code>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default BasicCharts;
