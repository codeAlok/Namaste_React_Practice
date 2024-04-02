
/* ***** creating an element through Javascript ***** */
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from JS";

// const root = document.getElementById('root');
// console.log(root);

// root.appendChild(heading);



/*  ***** creating / doing manipulation through React Js ***** */

 // React.createElement()   [core react thing, so using this]
// structure =>    React.createElement(tagNamme, {attributeName: "value"}, children/content);

/*
 const heading = React.createElement("h1", {id: "heading"} , "Hello World from react");
 console.log(heading);  // output an object, which is reactElement

 // ReactDOM.createRoot()   [mainpulation in dom, so using ReactDOM]
 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(heading);  // take object and render by converting into tag
*/

 
/* ***** Create this kind of  structure  ****
    <div id="parent">
        <div id="child">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
    </div>
*/

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
    ])
);

// to give more than 1 sibling/ nested structure to an element [we have to create an Array of children] as done above
// work fine, but will show warning! in console  [Each child in a list should have a unique "key" prop.]
// "JSX" makes it easy to write/include tag through React, [but core React create tag as done above]

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // this replaced whole content inside the root div and render the current data

// React js is a library  => because it can be implemented on a existing project or into a small section of project easily


// ****************** BE CURIOUS and ASK MORE QUESTION ********************



