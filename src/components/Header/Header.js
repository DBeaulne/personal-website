import "./Header.scss";
import NavLinks from "../NavLinks/NavLinks";
import ExtLinks from "../ExtLinks/ExtLinks";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="header">
			<h2>header component</h2>
			<p>
				Include Personal Brand icon, navLinks to About & Project pages, links to external sites, GitHub and LinkedIN
			</p>
			<li>
				<Link to="/">Home</Link>
			</li>
			<div className="header__icon-container">
				<img className="header__icon" src="" alt="personal brand icon" />
			</div>
			<NavLinks />
			<ExtLinks />
		</div>
	);
}
export default Header;
