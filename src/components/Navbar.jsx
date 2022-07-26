import logo from "../assets/icons/logo.svg"

function Navbar() {
	return (
		<nav>
			<div class="nav__container">
				<div class="nav__logo">
					<img src={logo} alt="logo" />
				</div>
				<ul class="nav__list">
					<li>
						<a href="./">Home</a>
					</li>
					<li>
						<a href="./">Services</a>
					</li>
					<li>
						<a href="./">Audit</a>
					</li>
					<li>
						<a href="./">About</a>
					</li>
				</ul>
				<button class="btn nav__btn">Contact</button>
			</div>
		</nav>
	);
}

export default Navbar;
