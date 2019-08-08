import React, { Component } from "react";
import "./App.css";
import Accordion from "./Accordion/Accordion";

const sections = [
  { title: "First Section", content: "Lorem Ipsum dolor sit amet" },
  { title: "Second Section", content: "Laboriosam exercitationem" },
  { title: "Third Section", content: "Fugit, sapiente aspernatur" }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Accordion</h2>
        <Accordion sections={sections} />
      </div>
    );
  }
}

export default App;
