import React, { Component } from "react";
import "../../src/css/Sidekick.css";

class Sidekick extends Component {
	render() {
		return (
			<>
				<div className="Avatar">
					<img
						src={require("../images/raccoon.png")}
						className="racoon"
						alt="raccoon"
					/>
				</div>
			</>
		);
	}
}

export default Sidekick;
