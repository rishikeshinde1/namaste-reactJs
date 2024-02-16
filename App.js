const ele = React.createElement("div", { id: "parent" },
  [React.createElement("div", { id: "child" },
    [React.createElement("h1", { id: "heading" }, "I am an H1 tag"),
    React.createElement("h2", {}, "I am an H2 tag")]
  ), React.createElement("div", { id: "child2" },
    [React.createElement("h1", { id: "heading" }, "I am an H1 tag"),
    React.createElement("h2", {}, "I am an H2 tag")]
  )],);



//const h1 = React.createElement("h1", { className: "heading", test: "testattribute" }, "Hello World from React!");
//console.log(h1);
const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(root);
root.render(ele);