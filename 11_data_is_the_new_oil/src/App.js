import React, {lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Header from "./components/Header"; // /Header or /Header.js (both work fine)
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
 

// **** Lazy loading ****
// **** Wrap component imported through this way inside <Suspense> component provided by react (to not show error between the loading time of this component) ****
const Grocery = lazy(() => import("./components/Grocery.js"))


// ****** Main App Component (starting point) ******
const AppLayout = () => {
    const [userName, setUserName] = useState();  // for updating context_UserContext

    // authentication data (just example)
    useEffect(() => {
        // Make an Api call and send username and password (dummy data)
        const data = {
            name: "Alok kumar",
        };

        setUserName(data.name);
    }, []);

    return (

        // ** <usercontext.Provider>  update value of context everwhere under this component by "react" **
        // *** also passing setUserName(), now can update statevariable from anywhere ***
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />

                {/* Here <outlet /> will automatically replaced by component inside children of applayout in createBrowserRouter based on path searched */}
                <Outlet />  

            </div>
        </UserContext.Provider>
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
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading......</h1>}> 
                            <Grocery /> 
                        </Suspense>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />, 
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />); 

// <RouterProvider />  (a component by react-router-dom)
root.render( <RouterProvider router={appRouter} /> );
