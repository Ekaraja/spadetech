import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { NavLink } from "react-router-dom";
import "rc-dropdown/assets/index.css";
import chevronDown from "../../assets/icons/chevron-down.svg";

function onSelect({ key }) {
	console.log(`${key} selected`);
}

function onVisibleChange(visible) {
	console.log(visible);
}

function Slidedown() {
	const menu = (
		<Menu onSelect={onSelect} className="dropdown__menu">
			<MenuItem key="1">
				<NavLink to="/services/consultancy">Consultancy</NavLink>
			</MenuItem>
			<MenuItem key="2">
				<NavLink to="/services/development">Development</NavLink>
			</MenuItem>
			<MenuItem key="3">
				<NavLink to="/services/security-audit">Security</NavLink>
			</MenuItem>
		</Menu>
	);

	return (
		<Dropdown
			trigger={["click"]}
			overlay={menu}
			animation="slide-up"
			onVisibleChange={onVisibleChange}
			className="nav__item dropdown-btn"
		>
			<button>
				Services <img src={chevronDown} alt="Services" />
			</button>
		</Dropdown>
	);
}

export default Slidedown;
