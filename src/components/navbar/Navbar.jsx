import { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import Sidebar from "./Sidebar";
import menu from "../../assets/icons/menu.svg";
import Slidedown from "./Dropdown";
import Contact from "../../pages/contact/Contact";

function Navbar() {

	const [openContact, setOpenContact] = useState(false)



	return (
		<>
		<nav id="nav">
			<Sidebar
				pageWrapId="main"
				outerContainerId="nav"
				customBurgerIcon={<img src={menu} alt="menu" />}
			/>
			<div className="nav__bar" id="topbar">

				<NavLink to="/" className="nav__logo">
					<img src={logo} alt="logo" />
				</NavLink>
				<div className="navbar__links">
					<NavLink to="/" className="nav__item">
						Home
					</NavLink>
					<Slidedown/>
					<NavLink to="/audit" className="nav__item">
						Audit
					</NavLink>
					<NavLink to="/about" className="nav__item">
						About
					</NavLink>

				</div>
				<div className="navbar__right">
					<button onClick={()=> setOpenContact(!openContact)} className="navbar__contact-btn">CONTACT</button>
				</div>
				{openContact && <Contact openContact={openContact} setOpenContact={setOpenContact}/>}
			</div>
		</nav>
		</>
	);
}

export default Navbar;
