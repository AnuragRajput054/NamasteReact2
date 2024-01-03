const heading = React.createElement("h1", {id:"head"}, "Hello1 world From React");
const root = ReactDOM.createRoot(document.getElementById("root"));

const parents = React.createElement(
    "div" ,
     {id: "parent"},[
       React.createElement( "div",{id:"child"},
     [ React.createElement("h1",{id:"head1"},"heyy this is h1 heading"), 
     React.createElement("h1",{id:"head2"},"heyy this is h2 heading"),
     React.createElement("h1",{id:"head3"},"heyy this is h3 heading")]
      ),
      React.createElement( "div", {id:"child2"},
     [ React.createElement("h1",{id:"head1"},"heyy this is h1 heading"),
      React.createElement("h1",{id:"head2"},"heyy this is h2 heading"),
      React.createElement("h1",{id:"head3"},"heyy this is h3 heading")]
      )]
);

console.log(parents);
root.render(parents);