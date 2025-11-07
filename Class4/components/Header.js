import { LOGO } from "../utils/constants"
const Header = () => {
    return(
    <div id="header-con">
        <img id="logo" alt="logo" src={LOGO}/>

        <ul id="navbar">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us📞</li>
            <li>Cart🛒</li>
        </ul>

    </div>
    )
}
export default Header;