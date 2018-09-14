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
import * as d3Scale from "d3-scale";
import { G, Line, Rect, Text as SvgText } from "react-native-svg";

import T from "./T";
import Code from "./Code";
import CopyRight from "./CopyRight";

const deviceWidth = Dimensions.get("window").width;

class Axis extends Component {
  render() {
    const domain = [8210, 8276];
    const range = [0, deviceWidth];
    const scale = d3Scale
      .scaleLinear()
      .domain(domain)
      .range(range);
    const numberOfTicks = 5;
    const ticks = scale.ticks(numberOfTicks);

    return (
      <ScrollView style={styles.container}>
        <T heading>Generating ticks</T>
        <T>scale.ticks(numberOfTicks): 產生 nice ticks</T>
        <T>背後是去呼叫 d3Array.ticks(start, stop, count)</T>
        <Code>{`
const domain = [8210, 8276];
const range = [0, deviceWidth];
const scale = d3Scale.scaleLinear().domain(domain).range(range);
const numberOfTicks = 5;
const ticks = scale.ticks(numberOfTicks); 
// [8210, 8220, 8230, 8240, 8250, 8260, 8270]
          `}</Code>
        <T heading>Rendering ticks</T>
        <Svg width={deviceWidth} height="100">
          <Line
            x1={0}
            y1={50}
            x2={deviceWidth}
            y2={50}
            strokeWidth={1}
            stroke="#ccc"
          />
          {ticks.map(tick => (
            <G x={scale(tick)} y={50} key={tick}>
              <Line strokeWidth="1" stroke="#999" x1={0} y1={0} x2={0} y2={5} />
              <SvgText y={5 + 10} textAnchor="middle">
                {tick}
              </SvgText>
            </G>
          ))}
        </Svg>
        <Code>{`
<Svg width={deviceWidth} height="100">
  <Line x1={0} y1={50} x2={deviceWidth} y2={50} strokeWidth={1} stroke="#ccc" />
  {ticks.map( tick => (
    <G y={50} x={scale(tick)}>
      <Line strokeWidth="1" stroke="#999" x1={0} y1={0} x2={0} y2={5} />
      <SvgText y={ 5 + 10 } textAnchor="middle">{tick}</SvgText>
    </G>
  ))}
</Svg>
          `}</Code>
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

export default Axis;
