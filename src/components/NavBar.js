import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
	state = {};
	scrollToTop = () => {
		scroll.scrollToTop();
	};
	render() {
		return (
			<nav>
				<ul>
					<li>
						<Link
							className="link"
							activeClass="active"
							to="Dashboard"
						>
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							className="link"
							activeClass="active"
							to="about"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							className="link"
							activeClass="active"
							to="/Login"
						>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
