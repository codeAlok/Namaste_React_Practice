import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us page</h1>
            <h4>Know more about Me</h4>

            <User name={"Alok for function"} location={"India"}/>
            
            <UserClass name={"Alok for class"} location={"India"}/>
        </div>
    );
};

export default About;