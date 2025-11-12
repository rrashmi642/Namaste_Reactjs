import { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO } from "../utils/constants"
const Header = () => {
    const [btn, setbtn] = useState("Login");
    return(
    <div id="header-con">
        <img id="logo" alt="logo" src={LOGO}/>

        <ul id="navbar">
            <Link to= "/"><li>Home</li> </Link>
            <Link to= "/about"> <li>About Us</li></Link>
            <Link to= "/contact"><li>Contact Us📞</li></Link>
            <li>Cart🛒</li>
            <li><button id="login" onClick={() => btn === "Login"? setbtn("Logout"): setbtn("Login")}>{btn}</button></li>
        </ul>

    </div>
    )
}
export default Header;