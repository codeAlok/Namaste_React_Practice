import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom"; // A component used instead of anchor tag

const Header = () => {
    const [btnName, setBtnName] = useState("login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    {/* <link></link> this helps in routing to diffrent pages without reloading whole page */}
                    {/* In html output it behave/show as an anchor tag */}
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/about">About Us</Link> </li>
                    <li> <Link to="/contact">Contact Us</Link> </li>
                    <li> <Link to="/cart">Cart</Link> </li>
                    <button 
                        className="login"
                        onClick = {() => {
                            btnName === "login" ? setBtnName("logout") : setBtnName("login");
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;