
/* ***** creating an element through Javascript ***** */
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from JS";

// const root = document.getElementById('root');
// console.log(root);

// root.appendChild(heading);



/*  ***** creating / doing manipulation through React Js ***** */

 // React.createElement()   [core react thing, so using this]
// structure =>    React.createElement(tagNamme, {attributeName: "value"}, children/content);


 const heading = React.createElement("h1", {id: "heading"} , "Hello World from react");
 console.log(heading);  // output an object, which is reactElement

 // ReactDOM.createRoot()   [mainpulation in dom, so using ReactDOM]
 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(heading);  // take object and render by converting into tag

 






