import { createContext } from "react";

// *** like a global object, that can be accessed anywhere in our app ***
const UserContext = createContext({
    loggedInUser: "Default User",
});

export default UserContext;