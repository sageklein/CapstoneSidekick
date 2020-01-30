import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class NavBar extends Component {
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
							to="/Dashboard"
						>
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							className="link"
							activeClass="active"
							to="/Sidekick"
						>
							Sidekick
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

export default NavBar;
