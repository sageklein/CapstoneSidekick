import React, { Component } from "react";
// import APIManager from "../../modules/APIManager";
import "../../src/css/Stuff.css";

class Stuff extends Component {
	render() {
		return (
			<>
				<div className="stuff">
					<img
						src={require("../images/Collection.png")}
						className="stuff"
						alt="Stuff"
					/>
				</div>
			</>
		);
	}
}

export default Stuff;