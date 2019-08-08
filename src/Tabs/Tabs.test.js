import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Tabs from "./Tabs";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

describe(`Tabs Component`, () => {
  const tabsProp = [
    { name: "First Tab", content: "Lorem Ipsum dolor sit amet" },
    { name: "Second Tab", content: "Laboriosam exercitationem" },
    { name: "Third Tab", content: "Fugit, sapiente aspernatur" }
  ];
  it("renders without erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the first tab by default", () => {
    const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders empty given no tabs", () => {
    const wrapper = shallow(<Tabs />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
