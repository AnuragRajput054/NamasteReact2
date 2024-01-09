import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  { id: "head" },
  "Hello1 world From React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

const parents = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "head1" }, "This is Anurag Rajput❤️🖊️"),
    React.createElement("h1", { id: "head2" }, "Revti Rajput"),
    React.createElement("h1", { id: "head3" }, "heyy this is h3 heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "head1" }, "heyy this is h1 heading"),
    React.createElement("h1", { id: "head2" }, "heyy this is h2 heading"),
    React.createElement("h1", { id: "head3" }, "heyy this is h3 heading"),
  ]),
]);
const jsxHeading = (
  <h1>
    This is a Namaste react Using JavaScript XML 🖊️
    <b>By Anurag Rajput❤️🖊️</b>
  </h1>
);
//this is a React Functional Component

const HeadingComponet = () => <h1>This is a React functional Component</h1>;
const Tittle = () => (
  <div>
     {alert("hey")}
    {jsxHeading}    {/** yaha pe hamne react element ko render kiya inside an another react component */}  
    <HeadingComponet /> {/**this is copmposed composition */}
    <h2>This is Component Composition {10+10}</h2>
  </div>
);

console.log(parents);
//root.render(jsxHeading);
root.render(<Tittle />);
