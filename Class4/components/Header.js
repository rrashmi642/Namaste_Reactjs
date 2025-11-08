import { useState } from "react";
import { LOGO } from "../utils/constants"
const Header = () => {
    const [btn, setbtn] = useState("Login");
    return(
    <div id="header-con">
        <img id="logo" alt="logo" src={LOGO}/>

        <ul id="navbar">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us📞</li>
            <li>Cart🛒</li>
            <li><button id="login" onClick={() => btn === "Login"? setbtn("Logout"): setbtn("Login")}>{btn}</button></li>
        </ul>

    </div>
    )
}
export default Header;