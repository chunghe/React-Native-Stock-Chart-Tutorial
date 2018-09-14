import SVGBasic from "../components/SVGBasic";
import BasicCharts from "../components/BasicCharts";
import D3Scale from "../components/D3Scale";
import D3Shape from "../components/D3Shape";
import CandleStick from "../components/CandleStick";
import PieChart from "../components/PieChart";
import Axis from "../components/Axis";

const tutorials = [
  { title: "SVG Basics", toRender: SVGBasic },
  { title: "Basic Charts", toRender: BasicCharts },
  { title: "D3 Scale", toRender: D3Scale },
  { title: "D3 Shape", toRender: D3Shape },
  { title: "Axis", toRender: Axis },
  { title: "Pie Chart", toRender: PieChart },
  { title: "CandleStick Chart", toRender: CandleStick }
];

export default tutorials;
