import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

function Sidebar(props) {
	return (
		<Menu right {...props}>
			<NavLink to="/" className="menu-item">
				Home
			</NavLink>
			<hr className="sidebar__divider" />
			<NavLink to="/services/consultancy" className="menu-item">
				Consultancy
			</NavLink>

			<NavLink to="/services/development" className="menu-item">
				Development
			</NavLink>

			<NavLink to="/services/security" className="menu-item">
				Security
			</NavLink>
			<hr className="sidebar__divider" />
			<NavLink to="/audit" className="menu-item">
				Audit
			</NavLink>
			<NavLink to="/about" className="menu-item">
				About
			</NavLink>
            <NavLink to="./" className="menu-item sidebar__contact">
				Contact
			</NavLink>
		</Menu>
	);
}

export default Sidebar;
