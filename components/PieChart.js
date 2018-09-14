import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet
} from "react-native";
import Svg, { G, Path } from "react-native-svg";
import * as d3Shape from "d3-shape";

import T from "./T";
import Code from "./Code";
import CopyRight from "./CopyRight";

const deviceWidth = Dimensions.get("window").width;

const PieColors = [
  "rgb(49, 109, 253)",
  "rgb(42, 225, 167)",
  "rgb(0, 196, 244)",
  "rgb(226, 249, 100)",
  "rgb(69, 248, 251)",
  "rgb(119, 93, 218)",
  "rgb(255, 61, 166)",
  "rgb(163, 204, 236)"
];

const Radius = 100;

const arcRadius = [
  Radius,
  Radius * 0.95,
  Radius * 0.9025, //  radius * 0.95 * 0.95,
  Radius * 0.875425, //  radius * 0.95 * 0.95 * 0.97,
  Radius * 0.84916225, // radius * 0.95 * 0.95 * 0.97 * 0.97,
  Radius * 0.832179005, // radius * 0.95 * 0.95 * 0.97 * 0.97 * 0.98,
  Radius * 0.8155354249, // radius * 0.95 * 0.95 * 0.97 * 0.97 * 0.98 * 0.98,
  Radius * 0.80738007065 // radius * 0.95 * 0.95 * 0.97 * 0.97 * 0.98 * 0.98 * 0.99,
];

class PieChart extends Component {
  render() {
    const data = [1, 2, 3, 4, 5];
    const arcs = d3Shape.pie()(data);

    const paths = arcs.map(arcData =>
      d3Shape
        .arc()
        .outerRadius(Radius)
        .innerRadius(0)(arcData)
    );

    const pathsWithDifferentRadius = arcs.map(arcData =>
      d3Shape
        .arc()
        .outerRadius(({ index }) => arcRadius[index])
        .innerRadius(0)(arcData)
    );

    return (
      <ScrollView style={styles.container}>
        <T>1. use D3Shape.pie to prepare data for D3Shape.arc to render</T>
        <Code>{`

  const data = [1,2,3,4,5];
  const arcs = d3Shape.pie()(data);

produces:

[
  {"data":1,"index":4,"value":1,"startAngle":5.8643062867009474,"endAngle":6.283185307179586,"padAngle":0},
  {"data":2,"index":3,"value":2,"startAngle":5.026548245743669,"endAngle":5.8643062867009474,"padAngle":0},
  {"data":3,"index":2,"value":3,"startAngle":3.7699111843077517,"endAngle":5.026548245743669,"padAngle":0},
  ...
  ]
`}</Code>

        <Code>{`

const paths = 
  arcs.map(arcData => 
    d3Shape
      .arc()
      .outerRadius(Radius)
      .innerRadius(0)(arcData))

produces:
  [
    "M-86.6025403784439,-49.999999999999936A100,100,0,0,1,-1.0718754395722282e-13,-100L0,0Z", 
    "M6.123233995736766e-15,100A100,100,0,0,1,-86.6025403784439,-49.999999999999936L0,0Z", 
    "M6.123233995736766e-15,-100A100,100,0,1,1,6.123233995736766e-15,100L0,0Z"
  ]
`}</Code>
        <Svg height={Radius * 2} width={deviceWidth}>
          <G x={deviceWidth / 2} y={Radius}>
            {paths.map((path, index) => (
              <Path key={index} fill={PieColors[index]} d={path} />
            ))}
          </G>
        </Svg>
        <T heading>Pie chart with different radius</T>
        <Code>{`
arcs.map(arcData => 
  d3Shape
    .arc()
    .outerRadius(({i}) => arcRadius[i])
    .innerRadius(0)(arcData))
`}</Code>

        <Svg height={Radius * 2} width={deviceWidth}>
          <G x={deviceWidth / 2} y={Radius}>
            {pathsWithDifferentRadius.map((path, index) => (
              <Path key={index} fill={PieColors[index]} d={path} />
            ))}
          </G>
        </Svg>
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
