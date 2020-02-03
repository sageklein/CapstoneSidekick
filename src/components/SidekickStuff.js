import React, { Component } from "react";
import "../../src/css/Sidekick.css";

class SidekickStuff extends Component {
	render() {
		return (
			<>
				<div className="Collection">
					<img
						src={require("../images/Collection.png")}
						className="collection"
						alt="Stuff"
					/>
				</div>
			</>
		);
	}
}

export default SidekickStuff;
