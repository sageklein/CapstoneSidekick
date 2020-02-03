import React, { Component } from "react";
// import APIManager from "../../modules/APIManager";
import "../../src/css/Login.css";

class Login extends Component {
	render() {
		return (
			<>
				<div>
					<h1>This is Login</h1>
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

export default Login;
