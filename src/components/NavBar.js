import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../../src/css/NavBar.css";

class NavBar extends Component {
	state = {};
	scrollToTop = () => {
		scroll.scrollToTop();
	};
	isAuthenticated = () => sessionStorage.getItem("activeUser") !== null;

	logOut = () => {
		this.props.clearUser();
		this.props.history.push("/login");
	};
	render() {
		return (
			<div className="nav">
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
						<Link className="link" activeClass="active" to="/Login">
							Logout
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavBar;
