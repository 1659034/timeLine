import React, { Component } from "react";
import * as d3 from "d3";
import { X_DOMAIN, X_RANGE, Y_DOMAIN, Y_RANGE } from "./_constants";

import TimelineAxis from "./TimelineAxis";

export default class Timeline extends Component {
  state = {
    xScale: d3
      .scaleTime()
      .domain(X_DOMAIN)
      .range(X_RANGE),
    yScale: d3
      .scaleLinear()
      .domain(Y_DOMAIN)
      .range(Y_RANGE)
  };

  render() {
    const { x, y, data } = this.props;
    const { xScale, yScale } = this.state;

    console.log(data);
    return (
      <g transform={`translate(${x}, ${y})`}>
        <TimelineAxis x={x} y={y} scale={xScale} position="Top" type="x" />
        <TimelineAxis x={x} y={y} scale={yScale} position="Left" type="y" />
      </g>
    );
  }
}
