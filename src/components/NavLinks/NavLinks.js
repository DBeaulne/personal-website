import { Link } from "react-router-dom";

function NavLinks() {
	return (
		<ul>
			<li>
				<Link to="about">About</Link>
			</li>
			<li>
				<Link to="Projects">Projects</Link>
			</li>
		</ul>
	);
}
export default NavLinks;
