import React, { Component } from "react";
import "../../src/css/Footer.css";

class Footer extends Component {
	render() {
		return (
			<>
				<div className="footer">
						<img
							src={require("../images/Back.png")}
							className="back"
							alt="back"
						/>
					</div>
			</>
		);
	}
}

export default Footer;
