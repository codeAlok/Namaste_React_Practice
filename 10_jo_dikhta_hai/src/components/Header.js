import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom"; // A component used instead of anchor tag
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between font-semibold bg-gray-200 mb-2 sm:bg-yellow-50 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-20" src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex items-center p-2 m-4">
                    <li className="px-2">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>

                    {/* <link></link> this helps in routing to diffrent pages without reloading whole page */}
                    {/* In html output it behave/show as an anchor tag */}
                    <li className="px-2"> <Link to="/">Home</Link> </li>
                    <li className="px-2"> <Link to="/about">About Us</Link> </li>
                    <li className="px-2"> <Link to="/contact">Contact Us</Link> </li>
                    <li className="px-2"> <Link to="/grocery">Grocery</Link> </li>
                    <li className="px-2"> <Link to="/cart">Cart</Link> </li>
                    <button 
                        className="p-1 rounded-sm text-white bg-blue-500"
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