import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import { Component } from "react"; 

// import React from "react" work same here
// class About extends React.Component { }

class About extends Component {

    constructor(props) {
        super(props);

        // console.log("parent constructor");
    }

    componentDidMount() {
        // console.log("parent componentDidMount");
    }

    render() {

        // console.log("parent rendered");

        return (
            <div>
                <h1>About Us page</h1>
                <h4>Know more about Me</h4>

                {/* using context in class component (older and 2nd way to use context) */}
                <UserContext.Consumer>
                    {({loggedInUser}) => (
                        <h1 className="text-xl font-bold">User: {loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
    
                <UserClass name={"first"} location={"India"}/>
            </div>
        );
    }
}

export default About;


/* **** This is the hierarchy of working in React lifecycle (when multiple child are there in same component having componentDidMount() in each)

        parent constructor
        parent rendered
        first child constructor
        first child rendered
        second child constructor
        second child rendered
        first child componentDidMount
        second child componentDidMount
        parent componentDidMount

*/