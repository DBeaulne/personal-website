import "./Footer.scss";
import NavLinks from "../NavLinks/NavLinks";
import ExtLinks from "../ExtLinks/ExtLinks";

function Footer() {
	return (
		<div className="footer">
			<h2>Footer component</h2>

			<p>copyright content</p>
			<NavLinks />
			<ExtLinks />
		</div>
	);
}
export default Footer;
