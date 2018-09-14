import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet
} from "react-native";
import Svg, { Path } from "react-native-svg";

import T from "./T";
import Code from "./Code";
import CopyRight from "./CopyRight";

const deviceWidth = Dimensions.get("window").width;

class PieChart extends Component {
  render() {
    return (
      <ScrollView>
        <T>Example:</T>
        <Code>
          {`
	import * as d3Shape from 'd3-shape';

	var arc = d3Shape.arc()
			.innerRadius(0)
			.outerRadius(100)
			.startAngle(0)
			.endAngle(Math.PI / 2);

	arc();
	// "M0,-100A100,100,0,0,1,100,0L0,0Z"
				`}
        </Code>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  firstRow: {
    width: 50
  },
  tableCell: {
    flex: 1
  }
});

export default PieChart;
