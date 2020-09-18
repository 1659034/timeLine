import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { getData } from "./_utils";
import Timeline from "./Timeline";

const AppWrap = styled.div`
  font-family: sans-serif;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Mockup = styled.img`
  height: 800px;
  width: 800px;
  margin-bottom: 20px;
  border: solid 2px black;
`;

const svg = {
  id: "svg",
  width: 1000,
  height: 300,
  style: { backgroundColor: "#e0e0e0" }
};

class App extends Component {
  state = {
    data: getData()
  };

  render() {
    const { data } = this.state;
    return (
      <AppWrap>
        <Mockup src="mockup.png" alt="mockup" />
        <svg
          id={svg.id}
          height={svg.height}
          width={svg.width}
          style={svg.style}
        >
          <Timeline x={30} y={20} data={data[1]} />
        </svg>
      </AppWrap>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
