import React, { Component } from "react";
import "../../src/css/Show.css";

class ShowOff extends Component {
	render() {
		return (
			<>
				<div className="ShowOff">
					<img
						src={require("../images/raccoon.png")}
						className="collection"
						alt="Stuff"
					/>
				</div>
			</>
		);
	}
}

export default ShowOff;
