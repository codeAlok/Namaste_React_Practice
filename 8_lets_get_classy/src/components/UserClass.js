// **** class based components for User ****
import React from "react"; 

// Normal Class + React.Component (makes it class based component)
class UserClass extends React.Component {
    
    // *** constructor() is called , each time when an instace of the class created / class get rendered ***
    constructor(props) {
        super(props);  // must use super(props), to access props anywhere inside class

        //** to create state variable in class component**
        // ** Here this.state={} is a large object which can hold lots of state variable
        this.state = {
            count: 0,
            count2: 12,
        }

        console.log(this.props.name + " child constructor");

    }

    // A function for class component which is called after constructor -> rendered -> componentDidMount()
    // Called after the component Mounted/loaded on to webpage completely
    componentDidMount() {
        console.log(this.props.name + " child componentDidMount");
    }

    // render() method returning JSX
    render() {

        console.log(this.props.name + " child rendered");

        // Destructuring
        const {name, location} = this.props;
        const {count, count2} = this.state;

        return (
            <div className="user-card">
                <h1>Inside Class Component</h1>

                <p>Count: {count}</p>
                <button
                    onClick={ () => {
                        // Never update state variable directly like this

                        // must use this.setState({ }) to update state variable in class component (takes an object)
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }}
                >
                    Count Increase
                </button>

                <h2>Name: {name}</h2>          
                <h3>Location: {location}</h3>
                <h4>Contact: @codealok </h4>
            </div>
        );
    }
}

export default UserClass;