import React from "react";
import ReactDOM from "react-dom/client";

// React element is same as DOM element through vanilla Js
// but react element is an object and after render(object), it become HTML
// React.createElement() => JS Object => render(JS Object) => HTML

const heading = React.createElement("h1", {id: "heading"}, "Namaste React"); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);  // replace everthing inside root


// ***** JSX => HTML like or XML like syntax (not html inside JS) ****
// **** JSX introuded for creating UI through react Easier ****

// JSX (transpiled before it reaches the JS, beacause js Engine not understood JSX syntax)
// JSX => React.creatElement => JS Object => render(JS Object) => HTML
// BABEL (JS Compiler => convert JSX into React.createElement )

// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
// ** must wrap multiline JSX inside ( )
// write attribute_name in camelCase in JSX
const jsxHeading = ( <h1 id="heading" className="head">
    Namaste React using JSX
    </h1> 
); 

// root.render(jsxHeading);


// *********** React functional Component ************
// below both functional component syntax is valid 
const HeadingComponent = () => {
    return <h1>Namaste react in Functional component</h1>;
}

const HeadingComponent2 = () => (<h1>Namaste react in Functional component</h1>);


// ** component composition (can write components inside component) **
// ** Can include any kind of JS Expression in JSX, by writing expression inside { js expression } **
// ** JSX handle (Cross Site Scripting) . ??
const Title = () => (
    <div id="container">

        <h2> {200 + 300 - 50} </h2>
        {console.log("Js expression inside JSX")}
        {jsxHeading}

        {/* can execute component in all these way */}
        {HeadingComponent2()}
        <HeadingComponent2 />
        <HeadingComponent2></HeadingComponent2>

        <h1>This is title component heading</h1>
        <HeadingComponent />   
    </div>
);

// ** enclose component_name inside angular bracket < />
// root.render(HeadingComponent);  // not work
root.render( <Title /> ); 
