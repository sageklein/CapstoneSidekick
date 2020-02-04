import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import NavBar from "../components/NavBar";
import "../../src/css/Sidekick.css";

class Sidekick extends Component {
	render() {
		return (
			<>
			<NavBar />
				<div className="whereTo">
					<img
						src={require("../images/whereTo.png")}
						className=""
						alt="raccoon"
					/>
				</div>
				<div className="see">
					<Link className="link" activeClass="active" to="/ShowOff">
						<img
							src={require("../images/See.png")}
							className="see"
							alt="See"
						/>
					</Link>
				</div>
				<div className="stuff">
					<Link className="link" activeClass="active" to="/Dashboard">
						<img
							src={require("../images/Stuff.png")}
							className="stuff"
							alt="Stuff"
						/>
					</Link>
				</div>
				<Footer />
			</>
		);
	}
}

export default Sidekick;
