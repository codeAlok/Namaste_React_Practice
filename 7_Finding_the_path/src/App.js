import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // /Header or /Header.js (both work fine)
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
 
// ****** Main App Component (starting point) ******
const AppLayout = () => {
    return (
        <div className="app">
            <Header />

            {/* Here <outlet /> will automatically replaced by component inside children of applayout in createBrowserRouter based on path searched */}
            <Outlet />
            
        </div>
    );
};

// **** Creating Routing configuration *****
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
        errorElement: <Error />, 
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />); 

// <RouterProvider />  (a component by react-router-dom)
root.render( <RouterProvider router={appRouter} /> );
