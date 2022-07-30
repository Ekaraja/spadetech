import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { useState } from "react";
function Navbar() {


	const [toggleMenu, setToggleMenu] = useState(false)
	const [openMenuDropDown, setOpenMenuDropDown] = useState(true)
	return (
		// <div className="nav__bar">
		// 	<NavLink to="/" className="nav__logo"><img src={logo} alt="logo" id="nav__logo" /></NavLink>
		// 	<input type="checkbox" id="toggle" aria-hidden="true" />
		// 	<label htmlFor="toggle" className="nav__icon" aria-hidden="true">
		// 		Expand the menu
		// 		<span className="nav__icon-line"></span>
		// 		<span className="nav__icon-line"></span>
		// 		<span className="nav__icon-line"></span>
		// 	</label>
		// 	<nav role="navigation" className="nav">
		// 		<ul className="nav__items">
		// 			<li className="nav__item">
		// 				<NavLink to="/">Home</NavLink>
		// 			</li>
		// 			<li className="nav__item">
		// 				<a>Services ▼</a>
		// 				<ul className="dropdown">
		// 					<li><NavLink to="/services/security-audit">Security Audit</NavLink></li>
		// 					<li><NavLink to="/services/development">Blockchain Development</NavLink></li>
		// 					<li><NavLink to="/services/consultancy">Blockchain Consulting</NavLink></li>
		// 				</ul>
		// 			</li>
		// 			<li className="nav__item">
		// 				<NavLink to="/">Audit</NavLink>
		// 			</li>
		// 			<li className="nav__item">
		// 				<NavLink to="/about">About</NavLink>
		// 			</li>
		// 			<li className="nav__item" id="nav__contact">
		// 				<NavLink to="/">Contact</NavLink>
		// 			</li>
		// 		</ul>
		// 		<Link id="nav__contact--btn" to="/">
		// 			Contact
		// 		</Link>
		// 	</nav>
		// </div>


		<div className="nav__bar">
			<NavLink to="/" className="nav__logo">
				<img src={logo} alt="logo" />
			</NavLink>

			<div onClick={() => setToggleMenu(false)} className={toggleMenu ? "nav__list-mobile" : "nav__list"}>
				<NavLink to="/" className="nav__item">Home</NavLink>
				<span onClick={() => setOpenMenuDropDown(!openMenuDropDown)} className="nav__item drop-menu__wrapper">Services</span>
				{
					openMenuDropDown &&
					<div onClick={() => setOpenMenuDropDown(false)} className="menu-drop">
						<NavLink to="/services/development" className="nav__item">HH</NavLink>
						<NavLink to="/services/consultancy" className="nav__item">KKK</NavLink>
					</div>
				}

				<NavLink to="/audit" className="nav__item">Audit</NavLink>
				<NavLink to="/about" className="nav__item">About</NavLink>
			</div>

			<div className="contact__btn">
				<button>contact</button>
			</div>

			<div onClick={() => setToggleMenu(!toggleMenu)} className="toggle-menu">
				<button>click</button>
			</div>
		</div>
	);
}

export default Navbar;
