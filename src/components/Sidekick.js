import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../src/css/Sidekick.css";

class Sidekick extends Component {
	render() {
		return (
			<>
				<div className="whereTo">
					<img
						src={require("../images/whereTo.png")}
						className="racoon"
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
			</>
		);
	}
}

export default Sidekick;
