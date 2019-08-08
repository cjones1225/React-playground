import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Accordion from "./Accordion";

const sectionsProp = [
  { title: "First Section", content: "Lorem Ipsum dolor sit amet" },
  { title: "Second Section", content: "Laboriosam exercitationem" },
  { title: "Third Section", content: "Fugit, sapiente aspernatur" }
];

describe(`Accordion Component`, () => {
  it("renders empty given no Accordion without errors", () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the no sections by default", () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("opens any clicked section", () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />);
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("only opens one section at a time", () => {
    const wrapper = shallow(<Accordion section={sectionsProp} />);
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    wrapper
      .find("button")
      .at(2)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
