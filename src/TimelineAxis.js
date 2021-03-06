import React, { Component } from "react";
import styled from "styled-components";
import * as d3 from "d3";

const Text = styled.text`
  font-family: sans-serif;
  font-size: 10px;
  fill: black;
`;

export default class TimelineAxis extends Component {
  constructor() {
    super();
    this.gRef = React.createRef();
  }

  componentDidUpdate() {
    this.d3Render();
  }
  componentDidMount() {
    this.d3Render();
  }

  d3Render() {
    const { type, position } = this.props;
    d3.select(this.gRef.current).call(d3[`axis${position}`](this.props.scale));
  }

  get labelPosition() {
    const { position, scale } = this.props;

    switch (position) {
      case "Top":
        return { x: scale.range()[1] + 20, y: 0 };
      case "Right":
        return { x: 20, y: 0 };
      case "Bottom":
        return { x: scale.range()[1] + 25, y: 25 };
      case "Left":
        return { x: -25, y: 0 };
      default:
        return { x: scale.range()[1] + 25, y: 25 };
    }
  }

  render() {
    const { x, y, label } = this.props;

    return (
      <g ref={this.gRef} transform={`translate(${x}, ${y})`}>
        <Text {...this.labelPosition}>{label}</Text>
      </g>
    );
  }
}
