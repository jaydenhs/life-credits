import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Person from "./person";

let sections = [
  "birth",
  "childhood",
  "elementary school",
  "high school",
  "university",
];

let birth = [
  {
    name: "Diana Tai",
    role: "mother",
    description: "insert description of what the person did here",
  },
  {
    name: "Jerry Hsiao",
    role: "father",
    description: "insert description of what the person did here",
  },
];

let elementary_school = [
  {
    name: "Norah Langton",
    role: "piano teacher",
    description: "insert description of what the person did here",
  },
  {
    name: "Linda Penrice",
    role: "first grade teacher",
    description: "insert description of what the person did here",
  },
  {
    name: "Amy Hall",
    role: "piano teacher",
    description: "insert description of what the person did here",
  },
  {
    name: "Sandy Grigsby",
    role: "fifth grade teacher",
    description: "insert description of what the person did here",
  },
  {
    name: "Jeremy Kuikman",
    role: "sixth grade teacher",
    description: "insert description of what the person did here",
  },
];

let high_school = [
  {
    name: "Brenda Csordas",
    role: "biology teacher",
    description:
      "thank you for teaching me the importance of educating future generations",
  },
];

let university = [
  {
    name: "Judy Zhong",
    role: "systems design mentor",
    description: "insert description of what the person did here",
  },
  {
    name: "Daniel Kwon",
    role: "systems design mentor",
    description: "insert description of what the person did here",
  },
  {
    name: "Sharon Zheng",
    role: "tech+ mentor",
    description: "insert description of what the person did here",
  },
];

export default class MainScreen extends React.Component {
  render() {
    return (
      <div>
        {/* use keys as dividers instead */}
        {sections.map((value) => {
          let divider_name = value.replace(" ", "_");
          // return <h2 class="divider">{value}</h2>;
          `${divider_name}`.map((value, index) => {
            return <Person info={`${divider_name}`[index]} />;
          });
        })}
      </div>
    );
  }
}
