import React from "react";
import ReactDOM from "react-dom/client";

//Q. Create a Nested header Element using React.createElement(h1,h2,h3) inside a div with class "title"
const nestedHeader = React.createElement(
    "div",
    {"class": "title"},
    [
        React.createElement("h1",{}, "heading1"),
        React.createElement("h2", {}, "heading2"),
        React.createElement("h3",{}, "heading3")
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(nestedHeader);

// Q. create same element using JSX
const jsxNestedHeader = (
    <div className="title">
        <h1>heading1 in JSX</h1>
        <h2>heading2 in JSX</h2>
        <h3>heading3 in JSX</h3>
    </div>
);

// root.render(jsxNestedHeader);

// Q. Create a functional component of the same with JSX and pass attributes into the tag in JSX
const NestedHeaderComponent = () => (
    <div className="title">
        <h1>heading1 in fn Component</h1>
        <h2>heading2 in fn Component</h2>
        <h3>heading3 in fn Component</h3>
    </div>
);

// root.render(<NestedHeaderComponent/>);

//Q. Composition of component(add component inside another)
const TempComponent = () => <h1>Inside Temporary Component </h1>;

const CompositionComp = () => {
    return (
        <div id="header">
            <h1>Inside Composition Component</h1>
            <TempComponent></TempComponent>
        </div>
    );
};

root.render(CompositionComp());

// Q. {TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

// Considering all of them are a component
// {TitleComponent} => embedding as Js expresssion , and this will not render itself , (can be used like this if we pass component as reference)

// {<TitleComponent />} and {<TitleComponent></TitleComponent>}  => both are valid syntax for executing component, as each at the end sotred in a variable and act as Js Expression






